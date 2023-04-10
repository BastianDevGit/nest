import { Module } from '@nestjs/common';
import { GamesCategoriesService } from './games-categories.service';
import { GamesCategoriesController } from './games-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from 'src/game/entities/game.entity';
import { Category } from 'src/categories/entities/category.entity';
import { GameCategory } from './entities/games-category.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [GamesCategoriesController],
  providers: [GamesCategoriesService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Game, Category, GameCategory])
  ],
  exports: [GamesCategoriesService]
})
export class GamesCategoriesModule {}
