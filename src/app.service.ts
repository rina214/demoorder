import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order, OrderDocument } from './schemas/order.schema';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class AppService {

  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async create(order: OrderDto): Promise<Order> {
    const createdOrder = await new this.orderModel(order);
    return createdOrder.save();
  }

  async findByBuyer(id: string): Promise<Order[]> {
    return this.orderModel.find({ buyer_id: id }).exec();
  }

  async findByOrder(id: string): Promise<Order[]> {
    return this.orderModel.find({ _id: id }).exec();
  }

  //async findAll(): Promise<Order[]> {
  //  return this.orderModel.find().exec();
  //}

  async update(id: string, order: OrderDto) {
    await this.orderModel.updateOne({ _id: id }, order);
  }

  async delete(id: string): Promise<void> {
    await this.orderModel.deleteOne({ _id: id });
  }
}
