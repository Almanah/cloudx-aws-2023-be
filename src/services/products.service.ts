import { PRODUCTS_MOCK } from '../mocks/products.mock';
import { Product } from '../types';

export class ProductsService {
  static async getProductsList(): Promise<Product[]> {
    return PRODUCTS_MOCK;
  }
  static async getProductById(id: string): Promise<Product | undefined> {
    return PRODUCTS_MOCK.find((item) => item.id === id);
  }
}
