'use client';

import { cn } from '@/lib/utils';
import { LoadingDot } from './ui/loading-dot';

interface Props {
  className?: string;
}

export default function CarouselSkeleton({ className }: Props) {
  return (
    <div className={cn('h-[calc(100vh-65px)] w-full', className)}>
      <LoadingDot className="h-full gap-4 bg-gray-400" />
    </div>
  );
}
