import { Controller, Get, Req, Post } from '@nestjs/common';
import { Request } from 'express';

@Controller('products')
export class ProductsController {
  @Post()
  create(): string {
    return 'This action adds a new product';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all products';
  }
}
