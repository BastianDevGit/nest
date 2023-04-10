import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Repository } from 'typeorm';
import { Game } from 'src/game/entities/game.entity';
import { CreateGamesCategoryDto } from './dto/create-games-category.dto';
import { UpdateGamesCategoryDto } from './dto/update-games-category.dto';
import { GameCategory } from './entities/games-category.entity';

@Injectable()
export class GamesCategoriesService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,

    @InjectRepository(GameCategory)
    private readonly gamesCategoryRepository: Repository<GameCategory>,
    
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,

    ){}

  create(createGamesCategoryDto: CreateGamesCategoryDto) {
    return 'This action adds a new gamesCategory';
  }

  findAll() {
    return `This action returns all gamesCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gamesCategory`;
  }

  update(id: number, updateGamesCategoryDto: UpdateGamesCategoryDto) {
    return `This action updates a #${id} gamesCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} gamesCategory`;
  }

  async updateGameCategory(id: number, idNewCategory: number) {
  
    const gameCategory = await this.gamesCategoryRepository.findOneBy({id});
    console.log(gameCategory)
    if ( !gameCategory ) 
      throw new NotFoundException('No existe la categoria para el juego');

    gameCategory.category.id = idNewCategory;

    return gameCategory;
  }
}
