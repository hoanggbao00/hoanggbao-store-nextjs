'use client';

import { Frown, LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  iconProps?: LucideProps;
  textClassName?: string;
  content?: string;
}

export default function ErrorState({
  className,
  iconProps,
  textClassName,
  content,
}: Props) {
  return (
    <div
      className={cn(
        'pointer-events-none flex flex-col items-center justify-center gap-2 text-destructive',
        className
      )}
    >
      <Frown size={128} strokeWidth={1} {...iconProps} />
      <span className={cn('text-semibold text-center text-4xl', textClassName)}>
        {content ?? 'Something went wrong!'}
      </span>
    </div>
  );
}
