'use client';

import { Button } from '@/components/ui/button';
import ErrorState from '@/components/ui/error-state';
import { LoadingDot } from '@/components/ui/loading-dot';
import useInfinityProducts from '@/hooks/use-infinite-product';
import ProductCard from './product-card';
import ProductCardSkeleton from './product-card-skeleton';

export default function ProductList() {
  const { products, hasNextPage, isError, isLoading, loadMore } =
    useInfinityProducts();

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {isLoading &&
          Array(5)
            .fill(0)
            .map((_, i) => <ProductCardSkeleton key={i} />)}

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {isError && <ErrorState />}
      {hasNextPage &&
        (!isLoading ? (
          <Button
            variant="outline"
            onClick={loadMore}
            className="mx-auto mt-3 block md:w-1/3"
            disabled={isLoading}
          >
            Xem thêm sản phẩm
          </Button>
        ) : (
          <div className="mt-5">
            <LoadingDot />
          </div>
        ))}
    </div>
  );
}
