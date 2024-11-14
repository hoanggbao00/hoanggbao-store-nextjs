'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { GetAllSlider } from '@/data/slider';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

interface Props {
  className?: string;
  overlayClassName?: string;
}

export default function HeroCarousel({ className, overlayClassName }: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllSlider();
      setData(data);
    };
    fetchData();
  }, []);

  return (
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
  );
}
