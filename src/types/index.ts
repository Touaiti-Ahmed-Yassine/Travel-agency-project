export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'skincare' | 'makeup' | 'haircare' | 'bodycare';
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}