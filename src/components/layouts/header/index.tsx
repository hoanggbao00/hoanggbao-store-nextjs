'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CartOverlay } from './cart-overlay';
import { NavLink } from './nav-link';
import { SearchInput } from './search-input';

const NAV_ROUTES = [
  {
    href: '/',
    label: 'Trang chủ',
  },
  {
    href: '/collections/tat-ca-san-pham',
    label: 'Sản phẩm',
  },
  {
    href: '/pages/store',
    label: 'Store',
  },
  {
    href: '/pages/about',
    label: 'Giới thiệu',
  },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold uppercase">Hoanggbao</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden h-full items-center md:flex">
          {NAV_ROUTES.map((route) => (
            <NavLink
              key={route.href}
              {...route}
              isActive={pathname === route.href}
            />
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <SearchInput className="hidden w-[250px] md:block" />
          <CartOverlay />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="flex flex-col items-center space-y-4 py-4 md:hidden">
          {NAV_ROUTES.map((route) => (
            <NavLink
              key={route.href}
              {...route}
              isActive={pathname === route.href}
              onClick={toggleMenu}
            />
          ))}
          <SearchInput className="w-full px-4" />
        </nav>
      )}
    </header>
  );
}
