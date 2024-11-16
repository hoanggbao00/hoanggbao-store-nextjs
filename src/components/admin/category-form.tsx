'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { addCategory } from '@/app/admin/(admin-pages)/_actions';
import { GetAllCategory, GetDetailCategory } from '@/data/category';
import { TCategory } from '@/types/category';

const formSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  parentId: z.string().nullable(),
});

export function CategoryForm({ id }: { id?: string }) {
  const [categories, setCategories] = useState<TCategory[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      slug: '',
      parentId: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (id === 'new') {
        await addCategory(values);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (categories.length === 0) {
      const fetchCategories = async () => {
        try {
          const data = await GetAllCategory();
          setCategories(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchCategories();
    }

    if (id !== 'new') {
      const fetchProduct = async () => {
        try {
          const res = await GetDetailCategory(id!);
          form.reset(res);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Category name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input placeholder="category-slug" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent Category</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value || ''}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select parent category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                  {/* Add categories here */}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
