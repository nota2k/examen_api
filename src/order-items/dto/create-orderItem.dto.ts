import { ApiProperty } from '@nestjs/swagger';
import { Order } from '../../orders/order.entity';
import { Product } from '../../products/product.entity';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateOrderItemDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Le produit est requis.' })
  product_id: Product;

  @ApiProperty()
  @IsNotEmpty({ message: 'La commande est requise.' })
  order_id: Order;

  @ApiProperty()
  @IsNotEmpty({ message: 'La quantité est requise.' })
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsOptional({ message: 'Le pourcentage de réduction est requis.' })
  @IsNumber()
  reduction_percentage: number;
}
