'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { GetAllCategory } from '@/data/category';
import { TCategory } from '@/types/category';
import { deleteCategory } from '../../_actions';

export default function CategoryListData() {
  const [data, setData] = useState<TCategory[]>([]);

  async function handleDeleteButton(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const id = formData.get('id') as string;
    if (!id) return null;

    try {
      await deleteCategory(id);
    } catch (error) {
      console.log(error);
    }
  }

  const columns = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'slug',
      header: 'Slug',
    },
    {
      accessorKey: 'parent.name',
      header: 'Parent Category',
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
    },
    {
      id: 'actions',
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-2">
          <Link href={`/admin/categories/${row.original.slug}`}>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </Link>
          <form onSubmit={handleDeleteButton}>
            <input type="hidden" name="id" value={row.original.id} />
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </form>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllCategory();
      setData(data.categories);
    };
    fetchData();
  }, []);

  return <DataTable columns={columns} data={data} />;
}
