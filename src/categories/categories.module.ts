import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from 'src/game/entities/game.entity';
import { GameCategory } from 'src/games-categories/entities/games-category.entity';
import { Category } from './entities/category.entity';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    TypeOrmModule.forFeature([Game, GameCategory, Category ])
  ],
  exports: [CategoriesService, TypeOrmModule]
})
export class CategoriesModule {}
