'use client';

import { useMemo, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { ChevronDown, Filter, X } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  colorList,
  priceList,
  sizeList,
} from '@/app/(pages)/collections/[slug]/_libs/consts';

export default function FilterSanPham() {
  const [prices, setPrices] = useState<any[]>([]);
  const [colors, setColors] = useState<any[]>([]);
  const [sizes, setSizes] = useState<any[]>([]);

  const priceFilter = useMemo(() => {
    if (prices.length > 0) {
      return priceList.filter((item) => prices.includes(item.value));
    }
    return [];
  }, [prices]);

  const colorFilter = useMemo(() => {
    if (colors.length > 0) {
      return colorList.filter((item) => colors.includes(item.value));
    }
    return [];
  }, [colors]);

  const sizeFilter = useMemo(() => {
    if (sizes.length > 0) {
      return sizeList.filter((item) => sizes.includes(item.value));
    }
    return [];
  }, [sizes]);

  const handleAddFilter = (type: 'price' | 'color' | 'size', value: any) => {
    switch (type) {
      case 'price':
        if (prices.includes(value)) {
          setPrices(prices.filter((item) => item !== value));
        } else {
          setPrices([...prices, value]);
        }
        break;
      case 'color':
        if (colors.includes(value)) {
          setColors(colors.filter((item) => item !== value));
        } else {
          setColors([...colors, value]);
        }
        break;
      case 'size':
        if (sizes.includes(value)) {
          setSizes(sizes.filter((item) => item !== value));
        } else {
          setSizes([...sizes, value]);
        }
        break;
    }
  };

  const handleRemoveFilter = (type: 'price' | 'color' | 'size', value: any) => {
    switch (type) {
      case 'price':
        setPrices(prices.filter((item) => item !== value));
        break;
      case 'color':
        setColors(colors.filter((item) => item !== value));
        break;
      case 'size':
        setSizes(sizes.filter((item) => item !== value));
        break;
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 py-2">
        <div className="flex items-center space-x-2 border-r">
          <Filter color="grey" />
          <p className="pr-2 font-semibold">BỘ LỌC</p>
        </div>
        {/* Giá */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className={buttonVariants({
              variant: 'outline',
              className: 'w-44 justify-between',
            })}
          >
            Lọc giá
            <ChevronDown className="ml-2 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="z-10 w-44 space-y-1 rounded-md border bg-white p-2"
            align="start"
          >
            {priceList.map((item) => (
              <DropdownMenuItem
                key={item.value}
                className="group flex cursor-pointer items-center gap-2 text-sm"
                onClick={() => handleAddFilter('price', item.value)}
              >
                <Checkbox
                  className="border-gray-300 transition-colors group-hover:border-gray-700"
                  checked={prices.includes(item.value)}
                />
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Màu sắc */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className={buttonVariants({
              variant: 'outline',
              className: 'w-44 justify-between',
            })}
          >
            Màu sắc
            <ChevronDown className="ml-2 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="z-10 flex w-44 flex-wrap gap-2 rounded-md border bg-white p-2"
            align="start"
          >
            {colorList.map((item) => (
              <DropdownMenuItem
                key={item.value}
                className="h-6 w-6 rounded-full border border-gray-300 transition-colors hover:border-black"
                style={{ backgroundColor: item.value }}
                onClick={() => handleAddFilter('color', item.value)}
              />
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Kích thước */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className={buttonVariants({
              variant: 'outline',
              className: 'w-44 justify-between',
            })}
          >
            Kích thước
            <ChevronDown className="ml-2 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="z-10 w-44 space-y-1 rounded-md border bg-white p-2"
            align="start"
          >
            {sizeList.map((item) => (
              <DropdownMenuItem
                key={item.value}
                className="group flex cursor-pointer items-center gap-2 text-sm"
                onClick={() => handleAddFilter('size', item.value)}
              >
                <Checkbox
                  className="border-gray-300 transition-colors group-hover:border-gray-700"
                  checked={sizes.includes(item.value)}
                />
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Display filters */}
      <div className="flex gap-2 py-2">
        {priceFilter.length > 0 && (
          <div className="flex w-fit items-center gap-1 rounded-full border px-2">
            <p className="text-sm font-semibold">Lọc giá:</p>
            {priceFilter.map((item, index) => (
              <>
                <div
                  className="group flex cursor-pointer items-center rounded-md hover:border hover:border-black hover:px-1"
                  key={item.value}
                  onClick={() => handleRemoveFilter('price', item.value)}
                >
                  <p className="text-sm">{item.label}</p>
                  <span className="ml-2 mr-1 hidden text-sm group-hover:inline-block">
                    <X className="size-4" />
                  </span>
                </div>
                {priceFilter[index + 1] && (
                  <span className="text-sm" key={`separator${index}`}>
                    ,
                  </span>
                )}
              </>
            ))}
          </div>
        )}

        {colorFilter.length > 0 && (
          <div className="flex w-fit items-center gap-2 rounded-full border px-2">
            <p className="text-sm font-semibold">Màu sắc:</p>
            {colorFilter.map((item) => (
              <div
                key={item.value}
                onClick={() => handleRemoveFilter('color', item.value)}
                className="group flex w-fit cursor-pointer items-center gap-1 rounded-full border bg-muted hover:border-black"
              >
                <span
                  className="size-6 rounded-full border border-gray-300 transition-colors"
                  style={{ backgroundColor: item.value }}
                />
                <span className="hidden text-sm group-hover:inline-block">
                  <X className="size-4" />
                </span>
              </div>
            ))}
          </div>
        )}

        {sizeFilter.length > 0 && (
          <div className="flex w-fit items-center gap-1 rounded-full border px-2">
            <p className="text-sm font-semibold">Kích thước:</p>
            {sizeFilter.map((item, index) => (
              <>
                <div
                  className="group flex cursor-pointer items-center rounded-md hover:border hover:border-black hover:px-1"
                  key={item.value}
                  onClick={() => handleRemoveFilter('size', item.value)}
                >
                  <p className="text-sm">{item.label}</p>
                  <span className="ml-2 mr-1 hidden text-sm group-hover:inline-block">
                    <X className="size-4" />
                  </span>
                </div>
                {sizeFilter[index + 1] && (
                  <span className="text-sm" key={`separator${index}`}>
                    ,
                  </span>
                )}
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
