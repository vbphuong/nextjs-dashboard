'use client';

import { SunIcon, UserIcon, CubeIcon, ChartBarIcon, TruckIcon, } from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const links = [
   { name: 'Customer', href: '/dashboard', icon: UserIcon }, // Represents a person or user
   { name: 'Product', href: '/dashboard/product', icon: CubeIcon }, // Represents a product or item
   { name: 'Environment', href: '/dashboard/environment', icon: SunIcon }, 
   { name: 'Market', href: '/dashboard/market', icon: ChartBarIcon }, // Represents analytics or market trends
   { name: 'Supply Chain', href: '/dashboard/supply_chain', icon: TruckIcon }, // Represents logistics or delivery
  ];
  

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => { 
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
