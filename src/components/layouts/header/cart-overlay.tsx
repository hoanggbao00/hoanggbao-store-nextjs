import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { ShoppingCart } from 'lucide-react';
import CartEmpty from '@/components/pages/cart/cart-empty';
import { buttonVariants } from '@/components/ui/button';
import useCart from '@/stores/use-cart';
import CartOverlayItem from './cart-overlay-item';

export const CartOverlay = () => {
  const { items, getTotalPrice } = useCart();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {items.length ?? 0}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="z-[99] mt-4 w-96 rounded-md border bg-white p-4 lg:w-80"
        align="end"
      >
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">GIỎ HÀNG</h2>

          <div className="flex items-center justify-center">
            {(!items || items.length == 0) && <CartEmpty />}
            {items && (
              <div className="flex max-h-[calc(50vh)] flex-1 flex-col gap-2 overflow-auto">
                {items.map((item) => (
                  <CartOverlayItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-sm">
              <span>TỔNG TIỀN:</span>
              <span className="font-semibold">
                {getTotalPrice().toLocaleString()}₫
              </span>
            </div>

            <Link
              href="/cart"
              className={buttonVariants({
                className: 'mt-4 w-full bg-red-500 hover:bg-red-600',
              })}
            >
              XEM GIỎ HÀNG
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
