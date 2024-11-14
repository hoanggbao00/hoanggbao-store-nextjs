'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { API_URL } from '@/global-config';

export const addCategory = async (body: any) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || '';

  try {
    const res = await fetch(`${API_URL}/category`, {
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

    revalidatePath('/admin/categories');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (id: string, body: any) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || '';

  try {
    const res = await fetch(`${API_URL}/category/${id}`, {
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
    revalidatePath('/admin/categories');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || '';

  try {
    const res = await fetch(`${API_URL}/category/${id}`, {
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
    revalidatePath('/admin/category');
    return data;
  } catch (error) {
    console.log(error);
  }
};
