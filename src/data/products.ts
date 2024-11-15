import { API_URL } from '@/global-config';

export const GetAllProducts = async (query: TPaginationParams) => {
  // convert query to url params
  const params = new URLSearchParams(query);
  const url = `${API_URL}/product/get-all?${params.toString()}`;

  try {
    const res = await fetch(url, {
      cache: 'force-cache',
    });
    const data = await res.json();

    return data.data as TPagination<TProduct>;
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong!');
  }
};

export const GetDetailProduct = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/product/detail/${id}`);
    const data = await res.json();

    return data.data.product as TProduct;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const GetAllProductsUrl = (query: TPaginationParams) => {
  // convert query to url params
  const params = new URLSearchParams(query);
  const url = `${API_URL}/product/get-all?${params.toString()}`;

  return url;
};
