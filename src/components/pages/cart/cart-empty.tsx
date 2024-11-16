'use client';

import { ShoppingCart } from 'lucide-react';

export default function CartEmpty() {
  return (
    <div className="w-full py-8 text-center">
      <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">Hiện chưa có sản phẩm</p>
    </div>
  );
}
