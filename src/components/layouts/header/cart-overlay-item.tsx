import { Minus, Plus, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useCart, { TProductCart } from '@/stores/use-cart';

interface Props {
  item: TProductCart;
}

export default function CartOverlayItem({ item }: Props) {
  const update = useCart((state) => state.update);
  const remove = useCart((state) => state.remove);
  return (
    <div className="flex flex-1 gap-2">
      {/* image */}
      <div className="relative flex-[1]">
        <img
          src={item.thumbnail}
          alt={item.name}
          className="aspect-[3/4] w-full rounded-sm"
        />
      </div>
      {/* info */}
      <div className="flex-[3]">
        <h3 className="line-clamp-2 text-sm font-semibold">{item.name}</h3>
        <span className="text-xs font-medium text-gray-500">
          Size: {item.size}, Color: {item.color.name}
        </span>
        <p className="text-sm font-semibold text-destructive">
          {item.price.toLocaleString()}₫
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => update('decrease', item)}
              className="size-6"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <p className="p-1">{item.quantity}</p>
            <Button
              variant="outline"
              size="icon"
              onClick={() => update('increase', item)}
              className="size-6"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => remove(item)}
              className="size-6"
            >
              <Trash className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
