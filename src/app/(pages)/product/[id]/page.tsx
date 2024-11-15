import type { Metadata, ResolvingMetadata } from 'next';
import { ProductDetail } from '@/components/pages/product-detail';
import PageBreadcrumb from '@/components/ui/page-breadcrumb';
import { GetAllProducts, GetDetailProduct } from '@/data/products';

type Props = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const pagination = await GetAllProducts({ limit: 100 });
  const products = pagination.data;

  return products.map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = (await params).id;

  // fetch data
  const product = await GetDetailProduct(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    description: `${product.description} - ${product.basePrice} - ${product.discount}%`,
    openGraph: {
      images: [...product.colors.map((c) => c.image), ...previousImages],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const id = (await params).id;
  const product = await GetDetailProduct(id);
  return (
    <div className="mx-auto max-w-7xl p-2">
      <PageBreadcrumb
        title={product.name}
        title2={product.category.name}
        path1={`/collections/${product.category.slug}`}
      />
      <ProductDetail product={product} />
    </div>
  );
}
