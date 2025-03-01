import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { OrderItem } from './order-item.entity';
import { CreateOrderItemDto } from './dto/create-orderItem.dto';
import { UpdateOrderItemDto } from './dto/update-orderItem.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('order-items')
@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'La commande a été créé avec succès.',
  })
  @ApiResponse({ status: 403, description: "Vous n'avez pas l'autorisation" })
  async create(
    @Body() createOrderItemDto: CreateOrderItemDto,
  ): Promise<OrderItem> {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Toutes les commandes ont été récupérés avec succès.',
  })
  @ApiResponse({ status: 403, description: "Vous n'avez pas l'autorisation" })
  @ApiResponse({
    status: 500,
    description: 'Problème lors de la récupération des commandes',
  })
  findAll(): Promise<OrderItem[]> {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderItemDto: UpdateOrderItemDto,
  ) {
    return this.orderItemsService.update(+id, updateOrderItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderItemsService.remove(+id);
  }

  @Delete(':orderId/:productId')
  removeProductByOrderId(
    @Param('orderId') orderId: string,
    @Param('productId') productId: string,
  ) {
    return this.orderItemsService.removeProductByOrderId(+orderId, +productId);
  }
}
