
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from '../products/product.entity';
import { Order } from '../orders/order.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, product => product.id)
  product: Product;

  @ManyToOne(() => Order, order => order.id)
  order: Order;

  @Column()
  quantity: number;

  @Column()
  reduction_percentage: number;
}
