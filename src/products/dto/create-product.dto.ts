import { ApiProperty } from '@nestjs/swagger';
import { CategoryDto } from 'src/categories/dto/category.dto';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Le nom du produit est requis.' })
  @IsString({ message: 'Le nom du produit est requis.' })
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'La description est optionnel' })
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Le prix du produit est requis' })
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Le nombre de produit est requis' })
  @IsNumber()
  stock: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'La catégorie du produit est requis.' })
  category_id: number;
}
