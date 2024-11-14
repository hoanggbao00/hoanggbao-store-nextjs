import { API_URL } from '@/global-config';
import { TCategory } from '@/types/category';

export const GetAllCategory = async () => {
  try {
    const res = await fetch(`${API_URL}/category/get-all`);
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetDetailCategory = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/category/detail/${id}`);
    const data = await res.json();

    return data.data.category as TCategory;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
