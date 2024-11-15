'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { formatDate } from '@/lib/utils';

const columns = [
  {
    accessorKey: 'id',
    header: 'Order ID',
  },
  {
    accessorKey: 'user.full_name',
    header: 'Customer',
  },
  {
    accessorKey: 'total',
    header: 'Total',
    cell: ({ row }: { row: any }) => {
      return `$${row.original.total.toFixed(2)}`;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }: { row: any }) => {
      const status = row.original.status;
      const colorMap = {
        PENDING: 'bg-yellow-500',
        PAID: 'bg-blue-500',
        SHIPPED: 'bg-purple-500',
        DELIVERED: 'bg-green-500',
        CANCELLED: 'bg-red-500',
      };
      return (
        <Badge
          className={`${colorMap[status as keyof typeof colorMap]} text-white`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Order Date',
    cell: ({ row }: { row: any }) => (
      <p>{formatDate(row.original.createdAt)}</p>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }: { row: any }) => (
      <div className="flex items-center gap-2">
        <Link href={`/admin/orders/${row.original.id}`}>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </Link>
      </div>
    ),
  },
];
export default function OrderDataTable() {
  return <DataTable columns={columns} data={[]} />;
}
