import { Metadata } from 'next';
import HeroCarousel from '@/components/hero-carousel';
import FilterSanPham from '@/components/pages/collections/filter-san-pham';
import ProductList from '@/components/pages/collections/list-product';
import SortSanPham from '@/components/pages/collections/sort-san-pham';
import PageBreadcrumb from '@/components/ui/page-breadcrumb';

export const metadata: Metadata = {
  title: 'Tất cả sản phẩm',
};

export default function SanPhamPage() {
  const pageTitle = 'Tất cả sản phẩm';

  return (
    <main className="container mx-auto p-2">
      <PageBreadcrumb title={pageTitle} />
      <div className="relative h-80 w-full overflow-hidden">
        <HeroCarousel className="h-80" overlayClassName="hidden" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <h2 className="mb-4 text-2xl font-bold md:mb-0">Tất cả sản phẩm</h2>
          <div className="flex items-center space-x-4">
            <SortSanPham />
          </div>
        </div>
        <FilterSanPham />
        <ProductList />
      </div>
    </main>
  );
}
