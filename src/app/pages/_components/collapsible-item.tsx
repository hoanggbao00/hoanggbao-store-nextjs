import Link from 'next/link';
import { useState } from 'react';

type ItemType = {
  name: string;
  href: string;
  items?: ItemType[];
};

type CollapsibleItemProps = {
  title: string;
  href?: string;
  items?: ItemType[];
};

const NestedItem = ({ item }: { item: ItemType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExpandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className="block flex-grow py-1 text-sm text-gray-600 hover:text-blue-600"
        >
          {item.name}
        </Link>
        {item.items && item.items.length > 0 && (
          <button
            onClick={handleExpandClick}
            className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-blue-600"
          >
            {isOpen ? '−' : '+'}
          </button>
        )}
      </div>
      {isOpen && item.items && item.items.length > 0 && (
        <ul className="mt-1 space-y-2 pl-4">
          {item.items.map((subItem, index) => (
            <NestedItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default function CollapsibleItem({
  title,
  href,
  items = [],
}: CollapsibleItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleExpandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <div className="flex w-full items-center justify-between py-2">
        <Link
          href={href || '#'}
          className="flex-grow text-left hover:text-blue-600"
        >
          {title}
        </Link>
        {items.length > 0 && (
          <button
            onClick={handleExpandClick}
            className="ml-2 flex h-6 w-6 items-center justify-center text-gray-400 hover:text-blue-600"
          >
            {isOpen ? '−' : '+'}
          </button>
        )}
      </div>

      {isOpen && items.length > 0 && (
        <ul className="space-y-2 pb-2 pl-4">
          {items.map((item, index) => (
            <NestedItem key={index} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
