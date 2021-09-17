import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    product_id: number;

    @Prop()
    product_name: string;

    @Prop()
    quantity: number;

    @Prop()
    price: number;

}

export const ProductSchema = SchemaFactory.createForClass(Product);