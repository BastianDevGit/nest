import { GameCategory } from 'src/games-categories/entities/games-category.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @OneToMany(() => GameCategory, (gamesCategory) => gamesCategory.category, {
    cascade: true,
    eager: true,
  })
  gamesCategories?: GameCategory[];
}
