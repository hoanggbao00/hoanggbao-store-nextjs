import { OrderDetails } from '@/components/admin/order-details';

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Order Details</h2>
      <OrderDetails id={id} />
    </div>
  );
}
