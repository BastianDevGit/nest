import { Category } from 'src/categories/entities/category.entity';
import { Game } from 'src/game/entities/game.entity';
import {Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('games_categories')
export class GamesCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        ()=> Category,
        (categoryID) => categoryID.id,
        {onDelete: 'CASCADE'}
    )
    categoryID: Category;

    @ManyToOne(
        ()=> Game,
        (gamesID) => gamesID.id,
        {onDelete: 'CASCADE'}
    )
    gamesID: Game;
}
