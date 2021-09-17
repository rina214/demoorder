import { Product } from './product.interface'

export interface Order {
    buyer_id: string;
    total_price: number;
    order_date: Date;
    pay_method: number;
    products: Product[];
}