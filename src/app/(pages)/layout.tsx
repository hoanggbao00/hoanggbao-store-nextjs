import { Metadata } from 'next';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';

export const metadata: Metadata = {
  title: {
    default: 'HOANGGBAO Store',
    template: '%s | HOANGGBAO Store',
  },
  description: 'HOANGGBAO Store',
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
