import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { ShoppingCart } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

export const CartOverlay = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            0
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="z-[99] mt-4 w-80 rounded-md border bg-white p-4"
        align="end"
      >
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">GIỎ HÀNG</h2>

          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                Hiện chưa có sản phẩm
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-sm">
              <span>TỔNG TIỀN:</span>
              <span>0₫</span>
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
