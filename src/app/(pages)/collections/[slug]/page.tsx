import { Metadata, ResolvingMetadata } from 'next';
import HeroCarousel from '@/components/hero-carousel';
import FilterSanPham from '@/components/pages/collections/filter-san-pham';
import ProductList from '@/components/pages/collections/list-product';
import SortSanPham from '@/components/pages/collections/sort-san-pham';
import PageBreadcrumb from '@/components/ui/page-breadcrumb';
import { GetAllCategory, GetDetailCategory } from '@/data/category';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const data = await GetAllCategory();
  // flat children to one array
  const categories = data.flatMap(
    (category) => category.children as TCategory[]
  );

  return [
    { slug: 'tat-ca-san-pham' },
    ...categories.map((category) => ({
      slug: String(category.slug),
    })),
  ];
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const category =
    slug === 'tat-ca-san-pham' ? null : await GetDetailCategory(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: category?.name ?? 'Tất cả sản phẩm',
    description: category?.name ?? 'Tất cả sản phẩm',
    openGraph: {
      images: [...previousImages],
    },
  };
}

export default async function SanPhamPage({ params }: Props) {
  const slug = (await params).slug;
  const category =
    slug == 'tat-ca-san-pham' ? null : await GetDetailCategory(slug);
  const pageTitle = category ? category.name : 'Tất cả sản phẩm';

  return (
    <main className="container mx-auto p-2">
      <PageBreadcrumb title={pageTitle} />
      <div className="relative h-80 w-full overflow-hidden">
        <HeroCarousel className="h-80" overlayClassName="hidden" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <h2 className="mb-4 text-2xl font-bold md:mb-0">{pageTitle}</h2>
          <div className="flex items-center space-x-4">
            <SortSanPham />
          </div>
        </div>
        <FilterSanPham />
        <ProductList />
      </div>
    </main>
  );
}
