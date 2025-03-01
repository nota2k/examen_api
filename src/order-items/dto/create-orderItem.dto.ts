import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { InsertOrderDto } from 'src/orders/dto/insert-order.dto';
import { InsertProductDto } from 'src/products/dto/insert-product.dto';

export class CreateOrderItemDto {
  @ApiProperty({ type: InsertProductDto })
  @IsNotEmpty({ message: 'Le produit est requis.' })
  product?: InsertProductDto;

  @ApiProperty({ type: InsertOrderDto })
  @IsNotEmpty({ message: 'Le produit est requis.' })
  @IsNumber()
  order?: InsertOrderDto;

  @ApiProperty()
  @IsNotEmpty({ message: 'La quantité est requise.' })
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsOptional({ message: 'Le pourcentage de réduction est requis.' })
  @IsNumber()
  reduction_percentage: number;
}
