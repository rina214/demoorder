import { ProductDto } from './product.dto'

export class OrderDto {
    buyer_id: string;
    total_price: number;
    order_date: Date;
    pay_method: number;
    products: ProductDto[];
}