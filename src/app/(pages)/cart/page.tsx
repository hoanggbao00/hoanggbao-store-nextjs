import dynamic from 'next/dynamic';
import CartSideBar from '@/components/pages/cart/cart-sidebar';
import PageBreadcrumb from '@/components/ui/page-breadcrumb';

const CartEmpty = dynamic(
  () => import('../../../components/pages/cart/cart-empty')
);

export default function CartPage() {
  const pageTitle = 'Giỏ hàng (0)';

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <PageBreadcrumb title={pageTitle} />

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
