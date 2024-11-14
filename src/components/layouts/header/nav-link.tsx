import Link from 'next/link';
import { cn } from '@/lib/utils';

export const NavLink = ({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className={cn(
      'flex h-full items-center justify-center px-4 transition-all duration-100 hover:border-b-2 hover:border-black',
      {
        'border-b-2 border-black': isActive,
      }
    )}
    onClick={onClick}
  >
    {label}
  </Link>
);
