import {
  IsString,
  IsNumber,
  IsOptional,
  IsPositive,
  MinLength,
  IsBoolean,
  IsArray,
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsString()
  @MinLength(1)
  url: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  promotion: boolean;

  @IsNumber()
  @IsArray()
  categories: number[];
}
