import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
