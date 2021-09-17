import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Product } from './product.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    
    @Prop()
    buyer_id: string;

    @Prop()
    total_price: number;

    @Prop({ default : Date.now })
    order_date: Date;

    @Prop()
    pay_method: number;

    @Prop()
    products: Product[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);