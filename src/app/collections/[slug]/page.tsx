import Image from 'next/image';
import Breadcrumb from '@/components/ui/breadcrumb';
import FilterSanPham from '@/app/collections/[slug]/_components/filter-san-pham';
import SortSanPham from '@/app/collections/[slug]/_components/sort-san-pham';
import ProductList from './_components/list-product';

export default function SanPhamPage() {
  const pageTitle = 'Tất cả sản phẩm';

  return (
    <main className="container mx-auto">
      <Breadcrumb title={pageTitle} />
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          alt="hoanggbao banner"
          className="object-cover"
          fill
          priority
          src="/placeholder.svg?height=320&width=1024"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">HOANGGBAO</h1>
        </div>
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
