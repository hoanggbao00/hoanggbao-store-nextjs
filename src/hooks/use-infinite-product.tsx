import useSWRInfinite from 'swr/infinite';
import { GetAllProductsUrl } from '@/data/products';
import { fetcher } from '@/lib/utils';

const getKey = (pageIndex: number, previousPageData: any) => {
  if (previousPageData && !previousPageData.hasNextPage) return null;
  return GetAllProductsUrl({ page: pageIndex + 1 });
};

const useInfinityProducts = () => {
  const { data, error, size, setSize, isValidating } = useSWRInfinite<
    TPagination<TProduct>
  >(getKey, fetcher);

  const products = data?.flatMap((page) => page.data) || [];
  const hasNextPage = data?.[data.length - 1]?.hasNextPage;
  const currentPage = data?.[data.length - 1]?.page || 1;
  const totalProducts = data?.[data.length - 1]?.total || 0;

  return {
    products,
    hasNextPage,
    currentPage,
    totalProducts,
    isLoading: !error && isValidating,
    isError: error,
    loadMore: () => setSize(size + 1),
  };
};

export default useInfinityProducts;
