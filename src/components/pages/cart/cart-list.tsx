'use client';

import useCart from '@/stores/use-cart';
import CartEmpty from './cart-empty';
import CartListItem from './cart-list-item';

export default function CartListPage() {
  const { items } = useCart();

  return (
    <>
      {items.length == 0 && <CartEmpty />}
      {items.length > 0 && (
        <div className="h-[calc(100vh-180px)] space-y-2 overflow-auto">
          {items.map((item) => (
            <CartListItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}
