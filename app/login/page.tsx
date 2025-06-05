import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/login-background.png"
        alt="Login Background"
        fill
        quality={100}
      />
      <div className="relative z-10 w-full max-w-md p-4">
        <div className="absolute bottom-4 left-4">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
        </div>
        
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}