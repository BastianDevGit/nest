import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { Game } from './entities/game.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameCategory } from 'src/games-categories/entities/games-category.entity';
import { Category } from 'src/categories/entities/category.entity';
import { GamesCategoriesService } from 'src/games-categories/games-categories.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [GameController],
  providers: [GameService, GamesCategoriesService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      Game,
      GameCategory,
      Category,
      GamesCategoriesService,
    ]),
  ],
})
export class GameModule {}
