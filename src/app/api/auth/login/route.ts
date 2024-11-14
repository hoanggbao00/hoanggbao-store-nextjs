import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { API_URL } from '@/global-config';

export interface LoginResponse {
  message: string;
  data: Data;
}

export interface Data {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  full_name: string;
  phone_number: string;
  role: string;
}

export const POST = async (req: NextRequest) => {
  const { phone_number, password } = await req.json();
  const cookieStore = await cookies();

  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone_number, password }),
    });

    if (res.status === 422) {
      return NextResponse.json(
        { message: 'Phone number is invalid' },
        { status: 422 }
      );
    }

    const data = (await res.json()) as LoginResponse;

    const payload = jwtDecode(data.data.accessToken);

    cookieStore.set('token', data.data.accessToken, {
      httpOnly: true,
      maxAge: payload.exp,
      sameSite: 'lax',
      path: '/',
    });

    return NextResponse.json({
      data: data.data.user,
      token: data.data.accessToken,
    });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
