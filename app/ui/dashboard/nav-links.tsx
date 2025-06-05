'use client';

import { SunIcon, UserIcon, CubeIcon, ChartBarIcon, TruckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Customer', href: '/dashboard', icon: UserIcon },
  { name: 'Product', href: '/dashboard/product', icon: CubeIcon },
  { name: 'Environment', href: '/dashboard/environment', icon: SunIcon },
  { name: 'Market', href: '/dashboard/market', icon: ChartBarIcon },
  { name: 'Supply Chain', href: '/dashboard/supply_chain', icon: TruckIcon },
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
              'flex h-[48px] grow items-center justify-center gap-2 rounded-lg bg-gray-800/50 p-3 text-sm font-medium text-white hover:bg-blue-600 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-blue-700 text-white shadow-[0_0_10px_rgba(59,130,246,0.3)]': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6 text-white" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}