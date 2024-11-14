import OrderDataTable from './_components/order-data';

export default function OrdersPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
      </div>
      <OrderDataTable />
    </div>
  );
}
