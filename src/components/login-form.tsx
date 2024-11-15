'use client';

import Link from 'next/link';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'nextjs-toploader/app';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import toast from '@/hooks/toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { LoadingDot } from './ui/loading-dot';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const loginSchema = z.object({
  phone_number: z
    .string()
    .min(1, {
      message: 'Phone number is required',
    })
    .regex(phoneRegex, {
      message: 'Invalid phone number',
    }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
});

export type TLoginForm = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<TLoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone_number: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error((await res.json()).message);
      }

      if (res.ok) {
        router.push('/admin');
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  }

  return (
    <>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your phone number below to login to access admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
              <Button type="submit" className="w-full" disabled={loading}>
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <LoadingDot />
        </div>
      )}
    </>
  );
}
