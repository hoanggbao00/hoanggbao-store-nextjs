import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { CategoryForm } from '@/components/admin/category-form';
import { buttonVariants } from '@/components/ui/button';

export default async function EditCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Link
          href="/admin/categories"
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
        >
          <ChevronLeft />
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">
          {id == 'new' ? 'Add new category' : 'Edit Category'}
        </h2>
      </div>
      <CategoryForm id={id} />
    </div>
  );
}
