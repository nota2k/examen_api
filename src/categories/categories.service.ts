import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Product } from 'src/products/product.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly CategoriesRepository: Repository<Category>,
    @InjectRepository(Product)
    private readonly ProductsRepository: Repository<Product>,
  ) {}

  async create(createCategoriesDto: CreateCategoryDto): Promise<Category> {
    return this.CategoriesRepository.save(createCategoriesDto);
  }

  async findAll(): Promise<Category[]> {
    return this.CategoriesRepository.find();
  }

  async findOne(id: number): Promise<Category> {
    const Categories = await this.CategoriesRepository.findOne({
      where: { id },
    });
    if (!Categories) {
      throw new NotFoundException(`Categories with ID ${id} not found`);
    }
    return Categories;
  }

  async findProductsByCategoryId(categoryId: number): Promise<Product[]> {
    return this.ProductsRepository.find({
      where: { category: { id: categoryId } },
    });
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const Categories = await this.findOne(id);
    const updatedCategories = { ...Categories, ...updateCategoryDto };
    return this.CategoriesRepository.save(updatedCategories);
  }

  async remove(id: number): Promise<void> {
    const Categories = await this.findOne(id);
    if (!Categories) {
      throw new NotFoundException(`Categories with ID ${id} not found`);
    }
    await this.CategoriesRepository.remove(Categories);
  }
}
