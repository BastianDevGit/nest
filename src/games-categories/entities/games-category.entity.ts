import { Category } from 'src/categories/entities/category.entity';
import { Game } from 'src/game/entities/game.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'games_categories' })
export class GameCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Category, (category) => category.gamesCategories, {
    onDelete: 'CASCADE',
  })
  category: Category;

  @ManyToOne(() => Game, (game) => game.gamesCategories, {
    onDelete: 'CASCADE',
  })
  game: Game;
}
