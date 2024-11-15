'use client';

import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import { ColorSelector } from './color-selector';
import { ImageSlider } from './image-slider';
import { SizeSelector } from './size-selector';

interface ProductDetailProps {
  product: TProduct;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const discountedPrice = useMemo(() => {
    return product.basePrice * (1 - product.discount);
  }, [product]);

  const images = useMemo(() => {
    return product.colors.map((c) => c.image);
  }, [product]);

  const selectedImageIndex = useMemo(() => {
    return product.colors.findIndex((c) => c.colorCode === selectedColor);
  }, [product.colors, selectedColor]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (!selectedColor) {
      toast.error('Please select a color');
      return;
    }

    // Add to cart logic here
    toast.success('Added to cart');
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <ImageSlider images={images} activeIndex={selectedImageIndex} />
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.description}</p>
        </div>

        <div className="flex items-baseline gap-4">
          <span className="text-2xl font-bold">
            {discountedPrice.toLocaleString()}
          </span>
          {product.discount > 0 && (
            <span className="text-lg text-gray-500 line-through">
              {product.basePrice.toLocaleString()}
            </span>
          )}
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Colors</h3>
          <ColorSelector
            colors={product.colors}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Size</h3>
          <SizeSelector
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full rounded-lg bg-black py-3 text-white transition-colors hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
