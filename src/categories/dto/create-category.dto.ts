import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Le nom de la catégorie est requis.' })
  @IsString({ message: 'Le nom de la catégorie est requis.' })
  name: string;
}
