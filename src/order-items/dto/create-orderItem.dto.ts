import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDto {
  @ApiProperty()
  product_id: number;
  @ApiProperty()
  order_id: number;
  @ApiProperty()
  quantity: number;
  @ApiProperty()
  reduction_percentage: number;
}
