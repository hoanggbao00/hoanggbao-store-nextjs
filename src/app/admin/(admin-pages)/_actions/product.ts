'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { API_URL } from '@/global-config';

export const addProduct = async (body: any) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || '';

  try {
    const res = await fetch(`${API_URL}/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (res.status === 403) {
      cookieStore.delete('token');
      return null;
    }

    const data = await res.json();

    revalidatePath('/admin/products');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (id: string, body: any) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || '';

  try {
    const res = await fetch(`${API_URL}/product/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (res.status === 403) {
      cookieStore.delete('token');
      return null;
    }

    const data = await res.json();
    revalidatePath('/admin/products');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || '';

  try {
    const res = await fetch(`${API_URL}/product/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 403) {
      cookieStore.delete('token');
      return null;
    }

    const data = await res.json();
    revalidatePath('/admin/products');
    return data;
  } catch (error) {
    console.log(error);
  }
};
