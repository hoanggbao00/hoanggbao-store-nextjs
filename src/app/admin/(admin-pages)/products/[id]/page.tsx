import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { ProductForm } from '@/components/admin/product-form';
import { buttonVariants } from '@/components/ui/button';

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Link
          href="/admin/products"
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
        >
          <ChevronLeft />
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">
          {id == 'new' ? 'Add new product' : 'Edit Product'}
        </h2>
      </div>
      <ProductForm id={id} />
    </div>
  );
}
