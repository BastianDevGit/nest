import { Category } from 'src/categories/entities/category.entity';
import { GamesCategory } from 'src/games-categories/entities/games-category.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn, OneToOne, ManyToMany } from 'typeorm';


@Entity('games')
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    title: string;

    @Column('int')
    price: number;

    @Column('text')
    url: string;

    @Column('text')
    description: string;

    @Column('bool')
    promotion: boolean;

    @OneToOne(
        () => Category)
    @JoinColumn()
    category: Category
    
    @OneToMany(
        ()=> GamesCategory,
        (gamesCategory) => gamesCategory.id,
        {cascade: true, eager: true}
    )

    @JoinTable()
    @ManyToMany(() => GamesCategory)
    gamesCategory: GamesCategory[];





}
