import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GamesCategoriesService } from './games-categories.service';

@Controller('games-categories')
export class GamesCategoriesController {}
