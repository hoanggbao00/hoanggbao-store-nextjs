import RightBar from '@/components/right-bar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 px-2 lg:grid-cols-3">
      <main className="pb-6 pt-2 lg:col-span-2">{children}</main>
      <div className="pb-4">
        <RightBar />
      </div>
    </div>
  );
}
