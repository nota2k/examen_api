import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Le produit a été créé avec succès.',
  })
  @ApiResponse({ status: 403, description: "Vous n'avez pas l'autorisation" })
  async create(@Body() createCatDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createCatDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Tous les produits ont été récupérés avec succès.',
  })
  @ApiResponse({ status: 403, description: "Vous n'avez pas l'autorisation" })
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateproductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateproductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
