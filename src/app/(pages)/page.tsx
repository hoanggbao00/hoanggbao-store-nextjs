import { Metadata } from 'next';
import { Suspense } from 'react';
import CarouselSkeleton from '@/components/carousel-skeleton';
import HeroCarousel from '@/components/hero-carousel';

export const metadata: Metadata = {
  title: 'Trang chủ | HOANGGBAO Store',
  description: 'HOANGGBAO Store',
};

export default function Component() {
  return (
    <main>
      <section className="w-full overflow-hidden">
        <Suspense fallback={<CarouselSkeleton />}>
          <HeroCarousel />
        </Suspense>
      </section>
    </main>
  );
}
