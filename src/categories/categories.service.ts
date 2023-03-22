import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {

  private readonly logger = new Logger('CategoriesService')

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    ){}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    await this.categoryRepository.save(category);
  
    return category
  }

  async findAll() {
    const category = await this.categoryRepository.find()

    return category;
  }

  async findOne(id: number) {
    let category = await this.categoryRepository.findOneBy({id})
    
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const {...toUpdate} = updateCategoryDto;
    const category = await this.categoryRepository.preload({id, ...toUpdate});
    if ( !category ) throw new NotFoundException('Categoria no encontrada')
    return this.categoryRepository.save(category);
  }
     
  async remove(id: number) {
    const category = await this.findOne(id)
    await this.categoryRepository.remove(category);
    return 'Categoria eliminada'
  }

  private handleExeptions(err: any) {
    
    if(err.code === '23505')
    throw new BadRequestException(err.detail)

    this.logger.error(err);
    throw new InternalServerErrorException('ayuda')

  }
}
