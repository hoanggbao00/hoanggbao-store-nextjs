'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';

const columns = [
  {
    accessorKey: 'image',
    header: 'Image',
    cell: ({ row }: { row: any }) => (
      <div className="relative h-20 w-40">
        <Image
          src={row.original.image}
          alt={row.original.alt}
          fill
          className="rounded-md object-cover"
        />
      </div>
    ),
  },
  {
    accessorKey: 'alt',
    header: 'Alt Text',
  },
  {
    accessorKey: 'path',
    header: 'Link Path',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
  },
  {
    id: 'actions',
    cell: ({ row }: { row: any }) => (
      <div className="flex items-center gap-2">
        <Link href={`/admin/sliders/${row.original.id}`}>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </Link>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
      </div>
    ),
  },
];

export default function SliderDataTable() {
  return <DataTable columns={columns} data={[]} />;
}
