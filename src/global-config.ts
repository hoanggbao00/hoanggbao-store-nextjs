export const STORE_NAME = 'HOANGGBAO';

export const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const JWT_SCRET = process.env.JWT_SECRET;

export const ADMIN_ROUTES = [
  {
    label: 'Dashboard',
    href: '/admin',
  },
  {
    label: 'Users',
    href: '/admin/users',
  },
  {
    label: 'Products',
    href: '/admin/products',
  },
  {
    label: 'Categories',
    href: '/admin/categories',
  },
  {
    label: 'Orders',
    href: '/admin/orders',
  },
  {
    label: 'Sliders',
    href: '/admin/sliders',
  },
];
