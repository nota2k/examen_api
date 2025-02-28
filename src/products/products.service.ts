import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
     constructor(
          @InjectRepository(Product)
          private productsRepository: Repository<Product>,
     ) {}

     findAll(): Promise<Product[]> {
          return this.productsRepository.find();
     }

     create(product: Product): Promise<Product> {
          return this.productsRepository.save(product);
     }

     findOne(id: number): Promise<Product | null> {
          return this.productsRepository.findOneBy({ id });
     }

     async remove(id: number): Promise<void> {
          await this.productsRepository.delete(id);
     }
}
