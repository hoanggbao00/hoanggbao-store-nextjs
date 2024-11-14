import Image from 'next/image';
import RightBar from '@/components/right-bar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3">
      <main className="pb-6 pt-2 lg:col-span-2">{children}</main>
      <div>
        <RightBar />
        {/* Promotional Image */}
        <div className="mt-6">
          <div className="relative mx-auto size-72">
            <Image
              src="https://file.hstatic.net/1000281824/file/z3509830781478_ce69b71da0bf0aafd5d6455921bb9d4e_88f55bac63264b9c94bb5795b6a402d4.jpg"
              alt="Promotional Image"
              fill
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
