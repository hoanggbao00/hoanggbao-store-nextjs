import { API_URL } from '@/global-config';

export const GetAllSlider = async () => {
  try {
    const res = await fetch(`${API_URL}/slider`);
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong!');
  }
};
