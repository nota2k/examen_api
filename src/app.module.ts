import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { ProductsModule } from './products/products.module';
import { Category } from './categories/category.entity';
import { CategoriesModule } from './categories/categories.module';
import { Order } from './orders/order.entity';
import { OrdersModule } from './orders/orders.module';
import { OrderItem } from './order-items/order-item.entity';
import { OrderItemsModule } from './order-items/order-items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'babillon_api',
      password: 'babillon_api',
      database: 'babillon_api',
      entities: [Product, Category, Order, OrderItem],
      synchronize: true,
    }),
    ProductsModule,
    CategoriesModule,
    OrdersModule,
    OrderItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}