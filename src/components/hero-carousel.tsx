'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { GetAllSlider } from '@/data/slider';
import toast from '@/hooks/toast';
import { cn } from '@/lib/utils';
import CarouselSkeleton from './carousel-skeleton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import ErrorState from './ui/error-state';

interface Props {
  className?: string;
  overlayClassName?: string;
}

export default function HeroCarousel({ className, overlayClassName }: Props) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetAllSlider();
        setData(data);
      } catch (error) {
        console.log(error);
        toast.error('Failed to fetch slider');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <CarouselSkeleton className={className} />
  ) : data.length > 0 ? (
    <Carousel plugins={[Autoplay({ delay: 2000 })]}>
      <CarouselContent>
        {data.map((item: any) => (
          <CarouselItem
            key={item.id}
            className={cn('relative h-[calc(100vh-65px)] w-full', className)}
          >
            <Image src={item.image} alt={item.alt} fill objectFit="cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div
        className={cn(
          'absolute left-16 right-16 top-0 z-50 flex h-[calc(100vh-65px)] justify-between',
          overlayClassName
        )}
      >
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  ) : (
    <div
      className={cn(
        'grid h-[calc(100vh-65px)] place-items-center rounded-md bg-gray-400',
        className
      )}
    >
      <ErrorState content="Cannot load slider" />
    </div>
  );
}
