import { API_URL } from '@/global-config';

export const GetAllProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/product/get-all`);
    const data = await res.json();

    return data.data as TPagination<TProduct>;
  } catch (error) {
    console.log(error);
    throw new Error();
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
