import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersRepository.save(createOrderDto);
  }

  async findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  async findOne(id: number): Promise<Order> {
    const orders = await this.ordersRepository.findOne({ where: { id } });
    if (!orders) {
      throw new NotFoundException(`Orders with ID ${id} not found`);
    }
    return orders;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const orders = await this.findOne(id);
    const updatedOrders = { ...orders, ...updateOrderDto };
    return this.ordersRepository.save(updatedOrders);
  }

  async remove(id: number): Promise<void> {
    const orders = await this.findOne(id);
    if (!orders) {
      throw new NotFoundException(`Orders with ID ${id} not found`);
    }
    await this.ordersRepository.remove(orders);
  }
}
