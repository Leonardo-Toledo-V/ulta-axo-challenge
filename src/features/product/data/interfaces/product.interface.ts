export interface Product {
  id: number;
  brand: string | null;
  name: string | null;
  price: string | null;
  price_sign: string | null;
  currency: string | null;
  image_link: string | null;
  product_link: string | null;
  website_link: string | null;
  description: string | null;
  rating: number | null;
  category: string | null;
  product_type: string | null;
  tag_list: string[];
  created_at: string | null;
  updated_at: string | null;
  product_api_url: string | null;
  api_featured_image: string | null;
  product_colors: Array<{
    hex_value: string;
    colour_name: string | null;
  }>;
}

export interface ProductsResponse {
  data: Product[];        
  message: string;        
  status: boolean;        
  status_code: number;
}