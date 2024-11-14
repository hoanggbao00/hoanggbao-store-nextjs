'use client';

import CollapsibleItem from './collapsible-item';

const sidebarData = [
  {
    title: 'SẢN PHẨM HOANGGBAO',
    href: '/collections/tat-ca-san-pham',
    items: [
      {
        name: 'CLOTHES | QUẦN ÁO',
        href: '/products/clothes',
        items: [
          { name: 'HOANGGBAO THEEIGHT', href: '/collections/clothes-theeight' },
          { name: 'HOANGGBAO MADMONKS', href: '/collections/clothes-madmonks' },
        ],
      },
    ],
  },
  {
    title: 'ACCESSORIES | PHỤ KIỆN',
    href: '/accessories',
    items: [
      {
        name: 'HOANGGBAO',
        href: '/collections/accessories-hoanggbao',
        items: [
          {
            name: 'HOANGGBAO PALLAS',
            href: '/collections/accessories-hoanggbao-pallas',
          },
          {
            name: 'HOANGGBAO BASIC',
            href: '/collections/accessories-hoanggbao-basic',
          },
        ],
      },
    ],
  },
  {
    title: 'STORE | CỬA HÀNG',
    href: '/store',
    items: [{ name: 'HCM - Q. Bình Thạnh', href: '/pages/store' }],
  },
  {
    title: 'HOANGGBAO | ABOUT US',
    href: '/about',
    items: [],
  },
];

export default function RightBar() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-bold">Danh mục page</h2>
      <div className="space-y-2">
        {sidebarData.map((item, index) => (
          <CollapsibleItem
            key={index}
            title={item.title}
            href={item.href}
            items={item.items}
          />
        ))}
      </div>
    </div>
  );
}
