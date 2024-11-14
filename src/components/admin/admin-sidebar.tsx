'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { ADMIN_ROUTES, STORE_NAME } from '@/global-config';

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href={'/admin'}>
          <h1 className="text-center text-lg font-semibold">
            {STORE_NAME}
            <p>ADMIN PANNEL</p>
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {ADMIN_ROUTES.map((item) => (
          <SidebarMenu key={item.href}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={item.href === pathname}>
                <Link href={item.href} className="px-4">
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
