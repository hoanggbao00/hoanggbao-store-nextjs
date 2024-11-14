'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { products } from '@/mock/products';
import ProductCard from './product-card';

export default function ProductList() {
  const [data, setData] = useState([...products]);
  const [page, setPage] = useState(2);

  const fetchMoreData = () => {
    setTimeout(() => {
      setData([...data, ...products.slice(page * 10 - 10, page * 10)]);
      setPage(page + 1);
    }, 1000);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Button
        variant="outline"
        onClick={fetchMoreData}
        className="mx-auto mt-3 block w-1/3"
      >
        Xem thêm sản phẩm
      </Button>
    </div>
  );
}
