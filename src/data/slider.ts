import { API_URL } from '@/global-config';

export const GetAllSlider = async () => {
  try {
    const res = await fetch(`${API_URL}/slider`);
    const data = await res.json();
    console.log('🚀 ~ GetAllSlider ~ API_URL:', API_URL);
    console.log(
      '🚀 ~ GetAllSlider ~ NEXT_PUBLIC_API_ENDPOINT:',
      process.env.NEXT_PUBLIC_API_ENDPOINT
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
