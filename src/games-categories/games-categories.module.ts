import { Module } from '@nestjs/common';
import { GamesCategoriesService } from './games-categories.service';
import { GamesCategoriesController } from './games-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from 'src/game/entities/game.entity';
import { Category } from 'src/categories/entities/category.entity';

@Module({
  controllers: [GamesCategoriesController],
  providers: [GamesCategoriesService],
  imports: [
    TypeOrmModule.forFeature([Game, Category])
  ]
})
export class GamesCategoriesModule {}
