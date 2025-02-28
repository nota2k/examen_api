export class CreateOrderItemDto {
  product_id: number;
  order_id: number;
  quantity: number;
  reduction_percentage: number;
}