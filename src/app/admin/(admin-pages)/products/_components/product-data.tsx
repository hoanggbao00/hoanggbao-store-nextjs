'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { GetAllProducts } from '@/data/products';
import { deleteProduct } from '../../_actions';

export default function ProductTableData() {
  const [data, setData] = useState<TProduct[] | []>([]);

  async function handleDeleteButton(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const id = formData.get('id') as string;
    if (!id) return null;

    try {
      await deleteProduct(id);
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
      accessorKey: 'basePrice',
      header: 'Price',
    },
    {
      accessorKey: 'category.name',
      header: 'Category',
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
    },
    {
      id: 'actions',
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-2">
          <Link href={`/admin/products/${row.original.id}`}>
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
      const data = await GetAllProducts();
      setData(data.data);
    };
    fetchData();
  }, []);

  return <DataTable columns={columns} data={data} />;
}
