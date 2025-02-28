
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_id: number;

  @Column()
  order_id: number;

  @Column()
  quantity: number;

  @Column()
  reduction_percentage: number;
}
