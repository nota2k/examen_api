import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async create(createproductsDto: CreateProductDto): Promise<Product> {
    return this.productsRepository.save(createproductsDto);
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find({relations: ['category']});
  }

  async findOne(id: number): Promise<Product> {
    const products = await this.productsRepository.findOne({ where: { id } , relations: ['category']});
    if (!products) {
      throw new NotFoundException(`products with ID ${id} not found`);
    }
    return products;
  }

  async update(
    id: number,
    updateproductDto: UpdateProductDto,
  ): Promise<Product> {
    const products = await this.findOne(id);
    const updatedproducts = { ...products, ...updateproductDto };
    return this.productsRepository.save(updatedproducts);
  }

  async remove(id: number): Promise<void> {
    const products = await this.findOne(id);
    if (!products) {
      throw new NotFoundException(`products with ID ${id} not found`);
    }
    await this.productsRepository.remove(products);
  }
}
