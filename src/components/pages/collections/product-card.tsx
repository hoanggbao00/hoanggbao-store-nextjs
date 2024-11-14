import Image from 'next/image';

interface Props {
  product: any;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="group">
      <div className="relative mb-4 aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mb-2 line-clamp-2 text-sm font-medium">{product.name}</h3>
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-red-600">
          {product.price.toLocaleString()}₫
        </span>
        <span className="text-sm text-gray-500 line-through">
          {product.originalPrice.toLocaleString()}₫
        </span>
      </div>
    </div>
  );
}
