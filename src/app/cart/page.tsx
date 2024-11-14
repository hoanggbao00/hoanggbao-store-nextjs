import dynamic from 'next/dynamic';
import Breadcrumb from '@/components/ui/breadcrumb';
import CartSideBar from './_components/cart-sidebar';

const CartEmpty = dynamic(() => import('./_components/cart-empty'));

export default function CartPage() {
  const pageTitle = 'Giỏ hàng (0)';

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumb title={pageTitle} />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart Content */}
        <div className="lg:col-span-2">
          <h1 className="mb-6 text-2xl font-bold">Giỏ hàng của bạn</h1>

          {/* Empty Cart Message */}
          <CartEmpty />
        </div>

        <CartSideBar />
      </div>
    </main>
  );
}
