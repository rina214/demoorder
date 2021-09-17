import { Controller, Get, Post, Body, Delete, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

import { Order } from './interfaces/order.interface';
import { OrderDto } from './dto/order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*
  @Get('list')
  async getAllOrder(): Promise<Order[]> {
    const result = await this.appService.findAll();
    return Object.assign({
      data: result,
      statusCode: 200,
      statusMsg: `모든 데이터가 성공적으로 조회되었습니다.`,
    });
  }
  */

  @Get('readBuyer')
  async getOrderBuyer(@Query('id') id): Promise<Order[]> {
    const result = await this.appService.findByBuyer(id);
    return result;
  }

  @Get('readOrder')
  async getOrder(@Query('id') id): Promise<Order[]> {
    const result = await this.appService.findByOrder(id);
    return result;
  }

  @Post('create')
  async createOrder(@Body() order: OrderDto): Promise<Order> {
    /*const date = new Date('2021-08-05 18:39:00');
    const order : OrderDto = {
      order_id: 0,
      buyer_id: 'a',
      total_price: 100,
      order_date: date,
      pay_method: 0,
      products: [
        {
          product_id: 0,
          seller_id: 'b',
          quantity: 1,
          price: 100,
        },
      ]
    }*/
    const result = await this.appService.create(order);
    return Object.assign({
      data: result,
      statusCode: 200,
      statusMsg: `데이터가 성공적으로 생성되었습니다.`,
    });
  }

  @Post('update')
  async updateOrder(@Query('id') id, @Body() order: OrderDto): Promise<any> {
    await this.appService.update(id, order);
    return Object.assign({
      statusCode: 200,
      statusMsg: `데이터가 성공적으로 갱신되었습니다.`,
    });
  }

  @Delete('delete')
  async deleteOrder(@Query('id') id): Promise<any> {
    await this.appService.delete(id);
    return Object.assign({
      statusCode: 200,
      statusMsg: `데이터가 성공적으로 삭제되었습니다.`,
    });
  }
}
