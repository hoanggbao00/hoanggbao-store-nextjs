'use client';

import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  dotClassName?: string;
}

export const LoadingDot = ({ className, dotClassName }: Props) => {
  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      <div
        className={cn(
          'h-5 w-5 animate-bounce rounded-full bg-blue-600',
          dotClassName
        )}
      ></div>
      <div
        className={cn(
          'h-5 w-5 animate-bounce rounded-full bg-blue-600 delay-300',
          dotClassName
        )}
      ></div>
      <div
        className={cn(
          'h-5 w-5 animate-bounce rounded-full bg-blue-600 delay-500',
          dotClassName
        )}
      ></div>
    </div>
  );
};
