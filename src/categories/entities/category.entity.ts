import { GamesCategory } from 'src/games-categories/entities/games-category.entity';
import { Column, Entity, OneToMany,PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @OneToMany(
        ()=> GamesCategory,
        (gamesCategory)=> gamesCategory.id,
        {cascade: true}
    )
    gamesCategory: GamesCategory;
    

};
