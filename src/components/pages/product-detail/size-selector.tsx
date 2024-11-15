'use client';

import { cn } from '@/lib/utils';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSelectSize: (_size: string) => void;
}

export function SizeSelector({
  sizes,
  selectedSize,
  onSelectSize,
}: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelectSize(size)}
          className={cn(
            'rounded-md border border-gray-200 px-4 py-2 transition-all hover:border-gray-300',
            { 'border-black bg-black text-white': selectedSize === size }
          )}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
