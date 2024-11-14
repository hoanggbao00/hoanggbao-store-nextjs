import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SliderDataTable from './_components/slider-data';

export default function SlidersPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Sliders</h2>
        <Link href="/admin/sliders/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Slider
          </Button>
        </Link>
      </div>
      <SliderDataTable />
    </div>
  );
}
