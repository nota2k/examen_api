import { ApiProperty } from '@nestjs/swagger';
import { Order } from '../../orders/order.entity';
import { Product } from '../../products/product.entity';

export class UpdateOrderItemDto {
  @ApiProperty()
  product_id?: Product;
  @ApiProperty()
  order_id?: Order;
  @ApiProperty()
  quantity?: number;
  @ApiProperty()
  reduction_percentage?: number;
}
