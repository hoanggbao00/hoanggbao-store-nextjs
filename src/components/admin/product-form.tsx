'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, Trash } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { addProduct, updateProduct } from '@/app/admin/(admin-pages)/_actions';
import { GetAllCategory } from '@/data/category';
import { GetDetailProduct } from '@/data/products';
import { cn } from '@/lib/utils';
import { TCategory } from '@/types/category';
import { ColorPicker } from '../ui/color-picker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { TagsInput } from '../ui/tags-input';

const formSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(10),
  basePrice: z.number().min(0),
  discount: z.number().min(0).max(100).optional(),
  categoryId: z.string(),
  sizes: z.array(z.string()).nonempty('Please input at least one size'),
  colors: z.array(
    z.object({
      name: z.string(),
      colorCode: z.string(),
      image: z.string(),
    })
  ),
});

const defaultValues = {
  name: '',
  description: '',
  basePrice: 0,
  discount: 0,
  categoryId: '',
  sizes: ['XL'],
  colors: [
    {
      name: 'Black',
      colorCode: '#000000',
      image: 'null',
    },
  ],
};

export function ProductForm({ id }: { id?: string }) {
  const [categories, setCategories] = useState<TCategory[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // Dynamic colors
  const {
    fields: colorFields,
    append: appendColor,
    remove: removeColor,
  } = useFieldArray({
    name: 'colors',
    control: form.control,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (id === 'new') {
        await addProduct(values);
        return;
      }

      await updateProduct(id!, values);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (categories.length === 0) {
      const fetchCategories = async () => {
        try {
          const data = await GetAllCategory();
          setCategories(data.categories);
        } catch (error) {
          console.log(error);
        }
      };
      fetchCategories();
    }

    if (id !== 'new') {
      const fetchProduct = async () => {
        try {
          const res = await GetDetailProduct(id!);
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
                <Input placeholder="Product name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Product description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sizes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sizes</FormLabel>
              <FormControl>
                <TagsInput
                  value={field.value}
                  onValueChange={field.onChange}
                  placeholder="Enter your tags"
                />
              </FormControl>
              <FormDescription>Add size by hit Enter</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {colorFields.map((field, index) => (
            <div key={field.id} className="flex items-end gap-2">
              <FormField
                control={form.control}
                name={`colors.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && 'sr-only')}>
                      Color name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`colors.${index}.colorCode`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && 'sr-only')}>
                      Color
                    </FormLabel>
                    <FormControl>
                      <ColorPicker {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`colors.${index}.image`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && 'sr-only')}>
                      Image Url
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {index !== 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => removeColor(index)}
                >
                  <Trash className="text-destructive" />
                </Button>
              )}
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  appendColor({ name: '', colorCode: '', image: '' })
                }
              >
                <Plus />
              </Button>
            </div>
          ))}
        </div>
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category to add product" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="basePrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Base Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => {
                    field.onChange(parseInt(e.target.value));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="discount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discount (%)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
