import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-4 bg-gray-900/80 backdrop-blur-sm animate-fadeIn">
      <Link
        className="mb-4 flex h-20 items-center justify-center rounded-lg bg-gradient-to-r from-blue-800 to-indigo-900 p-4 md:h-40 transition-all duration-300 hover:scale-105"
        href="/"
      >
        <div className="w-32 text-white md:w-40 text-2xl font-bold tracking-tight">
          MyApp
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-3">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-lg bg-gray-800/50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-lg bg-gray-800/50 p-3 text-sm font-medium text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6 text-white" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}