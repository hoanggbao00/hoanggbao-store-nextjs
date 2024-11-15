import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export const SearchInput = ({ className }: { className?: string }) => (
  <div className={cn('relative', className)}>
    <Search className="absolute left-[6%] top-2.5 h-4 w-4 text-gray-500 md:left-[5%]" />
    <Input
      className="w-full pl-8"
      placeholder="Tìm kiếm sản phẩm..."
      type="search"
    />
  </div>
);
