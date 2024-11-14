import { SliderForm } from '@/components/admin/slider-form';

export default async function EditSliderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Edit Slider</h2>
      <SliderForm id={id} />
    </div>
  );
}
