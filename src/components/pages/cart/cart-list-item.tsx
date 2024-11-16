import Link from 'next/link';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useCart, { TProductCart } from '@/stores/use-cart';

interface Props {
  item: TProductCart;
}

export default function CartListItem({ item }: Props) {
  const update = useCart((state) => state.update);
  const remove = useCart((state) => state.remove);
  return (
    <div className="flex flex-1 gap-2">
      {/* image */}
      <Link href={`/product/${item.id}`} className="flex-[1]">
        <div className="relative">
          <img
            src={item.thumbnail}
            alt={item.name}
            className="aspect-[3/4] w-full rounded-sm"
          />
        </div>
      </Link>
      {/* info */}
      <div className="flex flex-[3] flex-col justify-between md:flex-[5]">
        {/* product info */}
        <div>
          <Link href={`/product/${item.id}`}>
            <h3 className="line-clamp-2 text-xl font-semibold hover:text-blue-400">
              {item.name}
            </h3>
          </Link>
          <span className="text-sm font-medium text-gray-500">
            Size: {item.size}, Color: {item.color.name}
          </span>
          <p className="font-semibold text-destructive">
            {item.price.toLocaleString()} ₫
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between border-t pt-2">
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => update('decrease', item)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <p className="p-1">{item.quantity}</p>
            <Button
              variant="outline"
              size="icon"
              onClick={() => update('increase', item)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => remove(item)}
            >
              Xóa
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
