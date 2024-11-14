interface TProduct {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  discount: number;
  categoryId: string;
  category: TProductCategory;
  sizes: string[];
  createdAt: Date;
  updatedAt: Date;
  colors: TProductColor[];
}

interface TProductColor {
  id: string;
  name: string;
  colorCode: string;
  image: string;
}

interface TProductCategory {
  id: string;
  name: string;
  slug: string;
}
