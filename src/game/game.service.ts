import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { GamesCategory } from 'src/games-categories/entities/games-category.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
  ){}

  create(createGameDto: CreateGameDto) {
    return 'This action adds a new game';
  }

  async findAll(paginationDto: PaginationDto) {
    const{limit=10, offset=0} = paginationDto
    const games = await this.gameRepository.find({
      take: limit,
      skip: offset,
      relations: {
        gamesCategory: true,
      }
    })
    return games.map(({gamesCategory, ...rest}) =>({
      ...rest,
      gamesCategory: gamesCategory.map(gc=> gc.id),
    }))
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }

}
