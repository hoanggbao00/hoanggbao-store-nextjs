import Image from 'next/image';
import Link from 'next/link';

interface Props {
  product: TProduct;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="group">
      <Link href={`/product/${product.id}`}>
        <div className="relative mb-4 aspect-square overflow-hidden">
          <Image
            src={product.colors[0].image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <h3 className="mb-2 line-clamp-2 text-lg font-bold">{product.name}</h3>
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-red-600">
          {product.discount
            ? (
                product.basePrice -
                (product.basePrice * product.discount) / 100
              ).toLocaleString()
            : product.basePrice.toLocaleString()}
          ₫
        </span>
        {product.discount && (
          <span className="text-sm text-gray-500 line-through">
            {product.basePrice.toLocaleString()}₫
          </span>
        )}
      </div>
    </div>
  );
}
