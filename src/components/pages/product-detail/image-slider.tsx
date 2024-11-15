'use client';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ImageSliderProps {
  images: string[];
  activeIndex: number;
}

export function ImageSlider({ images, activeIndex }: ImageSliderProps) {
  return (
    <Carousel
      opts={{
        startIndex: activeIndex,
      }}
      className="relative w-full"
      plugins={[Autoplay({ delay: 2000 })]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-square md:aspect-[3/4]">
              <Image
                src={image}
                alt={`Product view ${index + 1}`}
                className="rounded-lg object-cover"
                fill
                objectFit="cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </>
      )}
    </Carousel>
  );
}
