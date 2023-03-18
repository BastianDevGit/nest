import { Injectable } from '@nestjs/common';
import { CreateGamesCategoryDto } from './dto/create-games-category.dto';
import { UpdateGamesCategoryDto } from './dto/update-games-category.dto';

@Injectable()
export class GamesCategoriesService {
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
}
