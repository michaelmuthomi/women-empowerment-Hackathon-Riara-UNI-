import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Toaster, toast } from "sonner";
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LoginPage />
}

function LoginPage() {
  
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 fixed top-0 w-full bg-slate-900 z-10 pb-8">
        <Toaster />
        <div className="sticky inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] index_beams__yWcJT">
          <div
            className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, black)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
            }}
          ></div>
        </div>
        <div className="relative pt-6 lg:pt-8 flex justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
          <img src="../src/assets/img/logo.png" className="w-10 h-10" />
          <div className="flex gap-x-4">
            <button type="button" className="-m-3 block p-3 md:hidden">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                className="w-6 h-6 text-slate-900 dark:text-white"
              >
                <path d="M12 6.75v10.5M6.75 12h10.5"></path>
              </svg>
            </button>
            <nav className="hidden md:flex gap-x-6">
              <ul className="flex gap-x-8">
                <li>
                  <a
                    className="text-white hover:text-sky-500 dark:hover:text-sky-400"
                    href="/"
                  >
                    &larr; Back Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-sky-500 dark:hover:text-sky-400"
                    href="/signup"
                  >
                    Signup
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <main className="main h-screen">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm grid gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
              <p className="text-gray-900">Please fill in the form below</p>
            </div>
            <hr />
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <Link to="/dashboard"
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 mt-4 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login and continue
              </Link>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}