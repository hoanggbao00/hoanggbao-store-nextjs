'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';

const columns = [
  {
    accessorKey: 'full_name',
    header: 'Name',
  },
  {
    accessorKey: 'phone_number',
    header: 'Phone',
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }: { row: any }) => {
      const role = row.original.role;
      return (
        <Badge className={role === 'ADMIN' ? 'bg-red-500' : 'bg-blue-500'}>
          {role}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Join Date',
  },
  {
    id: 'actions',
    cell: ({ row }: { row: any }) => (
      <div className="flex items-center gap-2">
        <Link href={`/admin/users/${row.original.id}`}>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </Link>
      </div>
    ),
  },
];

export default function UserDataTable() {
  return <DataTable columns={columns} data={[]} />;
}
