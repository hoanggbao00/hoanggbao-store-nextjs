import Image from 'next/image';
import { GetAllCategory } from '@/data/category';
import { STORE_NAME } from '@/global-config';
import CollapsibleItem, { Item } from './collapsible-item';

export default async function RightBar() {
  const data = (await GetAllCategory()) ?? [];

  const convertChildren = (children: TCategory[]): Item[] => {
    if (!children || children.length === 0) return [];

    return children.map((child) => ({
      name: child.name,
      slug: `/collections/${child.slug}`,
      items: convertChildren(child.children),
    }));
  };

  // convert children of data to items
  const categories = convertChildren(data).concat([
    {
      name: `${STORE_NAME} | ABOUT US`,
      slug: '/pages/about',
      items: [],
    },
  ]);

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-bold">Danh mục</h2>
      <div className="space-y-2">
        {categories.map((item, index) => (
          <CollapsibleItem key={index} {...item} />
        ))}
      </div>
      <div className="mt-6">
        <div className="relative mx-auto size-72">
          <Image
            src="https://file.hstatic.net/1000281824/file/z3509830781478_ce69b71da0bf0aafd5d6455921bb9d4e_88f55bac63264b9c94bb5795b6a402d4.jpg"
            alt="Promotional Image"
            fill
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
