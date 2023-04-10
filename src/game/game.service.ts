import { Inject, Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { Repository, DataSource } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { GameCategory } from 'src/games-categories/entities/games-category.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { CreateGamesCategoryDto } from 'src/games-categories/dto/create-games-category.dto';
import { GamesCategoriesService } from 'src/games-categories/games-categories.service';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,

    @InjectRepository(GameCategory)
    private readonly gamesCategoryRepository: Repository<GameCategory>,
    
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,

    @Inject(GamesCategoriesService)
    private readonly gamesCategoriesService: GamesCategoriesService,

    @InjectDataSource() private readonly dataSource: DataSource

    ){}


  async create(createGameDto: CreateGameDto) {

    console.log(createGameDto);

    // let game = new Game();

    const {...gameCreate} = createGameDto

    const games = this.gameRepository.create({
      ...gameCreate
    })

    const gameSave = await this.gameRepository.save(games);

    if ( !gameSave ) 
      throw new NotFoundException('el juego no se puedo guardar');

    let gameCategories = new GameCategory();
    let category = new Category();

    
    for (let index = 0; index < createGameDto.categories.length; index++) {

      category = await this.categoryRepository.findOneBy({id:createGameDto.categories[index]});

      if(category) {
        gameCategories.category = category;
        gameCategories.game =  gameSave;

        this.gamesCategoryRepository.save(gameCategories);
      }
      
    }
    return gameSave;
    
  }
  
  
  async findAll(paginationDto: PaginationDto) {
    const{limit=10, offset=0} = paginationDto
    const games = await this.gameRepository.find({
      take: limit,
      skip: offset,
      relations: {
        gamesCategories: true,
      }
    })
    return games.map(({gamesCategories, ...rest}) =>({
      ...rest,
      gamesCategories: gamesCategories.map(gc=> gc.id),
    }))
  }

  async findOne(id: number) {

    let game: Game;
    game = await this.gameRepository.findOneBy({id});

    if ( !game ) throw new NotFoundException('El juego no fue enconrado')

    return game
  }

  async update(id: number, updateGameDto: UpdateGameDto) {

    const {title, description, url, price, promotion, categories } = updateGameDto;

    const game = await this.findOne(id);

    if ( !game ) throw new NotFoundException('Juego no encontrado')

    game.title = title;
    game.description = description;
    game.url = url;
    game.price = price;
    game.promotion = promotion;

    let gamesCategory = [];

    for (let index = 0; index < game.gamesCategories.length; index++) {
      gamesCategory.push(this.gamesCategoriesService.updateGameCategory(game.gamesCategories[index].id, id));
      
    }


    return this.gameRepository.save(game);
  }

  async remove(id: number) {

    const game = await this.gameRepository.findOneBy({id})

    if ( !game ) throw new NotFoundException('Juego no encontrado')

    this.gameRepository.remove(game)

    

    return `This action removes El juego con el #${id} ha sido eliminado correctamente`;
  }

}
