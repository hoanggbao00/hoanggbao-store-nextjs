'use client';

import { cn } from '@/lib/utils';

interface ColorSelectorProps {
  colors: TProductColor[];
  selectedColor: string | null;
  onSelectColor: (_colorCode: string) => void;
}

export function ColorSelector({
  colors,
  selectedColor,
  onSelectColor,
}: ColorSelectorProps) {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <button
          key={color.colorCode}
          onClick={() => onSelectColor(color.colorCode)}
          className={cn(
            'h-8 w-8 rounded-full border-2 border-transparent transition-all hover:border-black',
            {
              'border-black': selectedColor === color.colorCode,
            }
          )}
          style={{ backgroundColor: color.colorCode }}
          title={color.name}
        />
      ))}
    </div>
  );
}
