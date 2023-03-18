import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamesCategoriesService } from './games-categories.service';
import { CreateGamesCategoryDto } from './dto/create-games-category.dto';
import { UpdateGamesCategoryDto } from './dto/update-games-category.dto';

@Controller('games-categories')
export class GamesCategoriesController {
  constructor(private readonly gamesCategoriesService: GamesCategoriesService) {}

  @Post()
  create(@Body() createGamesCategoryDto: CreateGamesCategoryDto) {
    return this.gamesCategoriesService.create(createGamesCategoryDto);
  }

  @Get()
  findAll() {
    return this.gamesCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamesCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGamesCategoryDto: UpdateGamesCategoryDto) {
    return this.gamesCategoriesService.update(+id, updateGamesCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamesCategoriesService.remove(+id);
  }
}
