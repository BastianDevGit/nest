import { PartialType } from '@nestjs/mapped-types';
import { CreateGamesCategoryDto } from './create-games-category.dto';

export class UpdateGamesCategoryDto extends PartialType(CreateGamesCategoryDto) {}
