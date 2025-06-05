import SideNav from '@/app/ui/dashboard/sidenav';

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-cover bg-center bg-gray-900 text-white"
      style={{ backgroundImage: "url('/main-background.png')" }}
    >
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}