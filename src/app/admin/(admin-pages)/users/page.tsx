import UserDataTable from './_components/user-data';

export default function UsersPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
      </div>
      <UserDataTable />
    </div>
  );
}
