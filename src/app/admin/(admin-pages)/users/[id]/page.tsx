import { UserDetails } from '@/components/admin/user-details';

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">User Details</h2>
      <UserDetails id={id} />
    </div>
  );
}
