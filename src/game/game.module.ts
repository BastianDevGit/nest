import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { Game } from './entities/game.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesCategory } from 'src/games-categories/entities/games-category.entity';


@Module({
  controllers: [GameController],
  providers: [GameService],
  imports: [
    TypeOrmModule.forFeature([Game, GamesCategory]),
  ]
})
export class GameModule {}
