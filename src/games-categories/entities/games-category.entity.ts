import { Category } from 'src/categories/entities/category.entity';
import { Game } from 'src/game/entities/game.entity';
import {Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('games_categories')
export class GamesCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        ()=> Category,
        (category) => category.id,
        {onDelete: 'CASCADE'}
    )
    category: Category;

    @ManyToOne(
        ()=> Game,
        (game) => game.id,
        {onDelete: 'CASCADE'}
    )
    game: Game;
}
