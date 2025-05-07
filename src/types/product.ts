
export interface ProductProps {
  id: string | number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  availability: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface ProductOrder {
  id: string;
  date: string;
  items: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
}

export interface RecommendedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface ProductStat {
  id: string;
  name: string;
  sold: number;
  revenue: number;
}
