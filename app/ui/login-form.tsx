'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="space-y-6">
      <div className="rounded-lg bg-gray-800/90 px-6 pb-6 pt-8 text-white backdrop-blur-md border border-white/20">
        <h1 className={`${lusitana.className} mb-6 text-3xl font-bold text-center text-white`}>Login Form</h1>
        <div className="w-full">
          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="email">Enter your email</label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-600 bg-gray-700/50 py-2 pl-10 pr-3 text-sm text-white placeholder-gray-400 focus:border-white focus:outline-none"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-white" />
            </div>
          </div>
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium" htmlFor="password">Enter your password</label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-600 bg-gray-700/50 py-2 pl-10 pr-3 text-sm text-white placeholder-gray-400 focus:border-white focus:outline-none"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-white" />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <Button className="mt-6 w-full bg-blue text-gray-800 hover:bg-gray-200 flex items-center justify-center" aria-disabled={isPending}>
          Log In <ArrowRightIcon className="ml-2 h-5 w-5 text-gray-800" />
        </Button>
        <div className="flex justify-between text-sm mt-4 text-gray-400">
          <span>Remember me</span>
          <span>Forgot password?</span>
        </div>
        <div className="text-center mt-4 text-sm text-gray-400">
          Don&#39;t have an account? Register
        </div>
        <div
          className="flex h-8 items-end space-x-1 mt-4"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-400" />
              <p className="text-sm text-red-400">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}