import { FC } from 'react';

const LoadingPage: FC = () => {
  return (
    <div className="fixed inset-0 bottom-0 left-0 z-[999] flex items-center justify-center bg-black/40">
      <div className="flex gap-2">
        <div className="h-5 w-5 animate-pulse rounded-full bg-blue-600"></div>
        <div className="h-5 w-5 animate-pulse rounded-full bg-blue-600"></div>
        <div className="h-5 w-5 animate-pulse rounded-full bg-blue-600"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
