import { API_URL } from '@/global-config';

export const GetAllCategory = async () => {
  try {
    const res = await fetch(`${API_URL}/category/get-all`);
    const data = await res.json();

    return data.data.categories as TCategory[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const GetDetailCategory = async (slug: string) => {
  try {
    const res = await fetch(`${API_URL}/category/detail/${slug}`);
    const data = await res.json();

    return data.data.category as TCategory;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
