import { GamesCategory } from 'src/games-categories/entities/games-category.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';


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

    
    
    @OneToMany(
        ()=> GamesCategory,
        (gamesCategory) => gamesCategory.game,
        {cascade: true, eager: true}
    )
    gamesCategory?: GamesCategory[];









}
