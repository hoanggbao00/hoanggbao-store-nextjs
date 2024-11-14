'use client';

export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-[200px] w-full rounded-lg bg-gray-200"></div>
      <div className="mt-2 h-6 rounded-md bg-gray-200"></div>
      <div className="mt-2 flex items-center space-x-2">
        <div className="h-6 w-1/2 rounded-md bg-gray-200"></div>
        <div className="h-6 w-1/4 rounded-md bg-gray-200"></div>
      </div>
    </div>
  );
}
