import * as React from 'react'
import { createFileRoute, Link, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignupPage />
}

function SignupPage() {
  function submitForm() {
    redirect({
      to: "/dashboard",
      throw: true,
    });
  }
    return (
      <div>
        <div className="px-4 sm:px-6 md:px-8 fixed top-0 w-full z-10 pb-8 h-screen overflow-auto">
          <div className="sticky inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] index_beams__yWcJT">
            <div
              className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black)",
              }}
            ></div>
          </div>
          <div className="sticky top-0 pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
            <img src="../src/assets/img/logo.png" className="w-10 h-10" />
            <div className="flex items-center gap-x-4">
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
                <ul className="flex items-center gap-x-8">
                  <li>
                    <a
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/"
                    >
                      &larr; Back Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/login"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <main className="w-full mt-14">
            <div className="flex min-h- items-center flex-col justify-center px-6 py-12 lg:px-8">
              <div className="mt-10 w-1/2 grid gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Create an account
                  </h2>
                  <p className="text-sm">Please fill in the form below</p>
                </div>
                <hr />
                <form onSubmit={submitForm}>
                  <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base/7 font-semibold text-gray-900">
                        Profile
                      </h2>
                      <p className="mt-1 text-sm/6 text-gray-600">
                        This information will be displayed publicly so be
                        careful what you share.
                      </p>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                          <label
                            htmlFor="username"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Username
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                                workcation.com/
                              </span>
                              <input
                                required
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="username"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                                placeholder="janesmith"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="about"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            About
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="about"
                              name="about"
                              required
                              rows={3}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            ></textarea>
                          </div>
                          <p className="mt-3 text-sm/6 text-gray-600">
                            Write a few sentences about yourself.
                          </p>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="photo"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Photo
                          </label>
                          <div className="mt-2 flex items-center gap-x-3">
                            <svg
                              className="size-12 text-gray-300"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <button
                              type="button"
                              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              Change
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base/7 font-semibold text-gray-900">
                        Personal Information
                      </h2>
                      <p className="mt-1 text-sm/6 text-gray-600">
                        Use a permanent address where you can receive mail.
                      </p>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            First name
                          </label>
                          <div className="mt-2">
                            <input
                              required
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Last name
                          </label>
                          <div className="mt-2">
                            <input
                              required
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="family-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-4">
                          <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              required
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="password"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Password
                          </label>
                          <div className="mt-2">
                            <input
                              required
                              type="text"
                              name="password"
                              id="password"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="confirm-password"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Confirm Password
                          </label>
                          <div className="mt-2">
                            <input
                              required
                              type="text"
                              name="confirm-password"
                              id="confirm-password"
                              autoComplete="family-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="street-address"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Street address
                          </label>
                          <div className="mt-2">
                            <input
                              required
                              type="text"
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                          <label
                            htmlFor="city"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            City
                          </label>
                          <div className="mt-2">
                            <input
                              required
                              type="text"
                              name="city"
                              id="city"
                              autoComplete="address-level2"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            State / Province
                          </label>
                          <div className="mt-2">
                            <input
                              required
                              type="text"
                              name="region"
                              id="region"
                              autoComplete="address-level1"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="postal-code"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            ZIP / Postal code
                          </label>
                          <div className="mt-2">
                            <input
                              required
                              type="text"
                              name="postal-code"
                              id="postal-code"
                              autoComplete="postal-code"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base/7 font-semibold text-gray-900">
                        Professional and Tech Background
                      </h2>
                      <p className="mt-1 text-sm/6 text-gray-600">
                        To help match with mentors/mentees and suggest relevant
                        resources.
                      </p>

                      <section className="py-6 grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                          <label
                            htmlFor="experience"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Years of experience
                          </label>
                          <div className="mt-2">
                            <select
                              id="experience"
                              required
                              name="experience"
                              autoComplete="experience"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                            >
                              <option>Less than a year</option>
                              <option>1 - 2 Years</option>
                              <option>3+ Years</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <label
                            htmlFor="field"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Select your field of study
                          </label>
                          <div className="mt-2">
                            <select
                              id="field"
                              required
                              name="field"
                              autoComplete="field"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                            >
                              <option>Machine Learning</option>
                              <option>Web Development</option>
                              <option>Mobile Development</option>
                              <option>Fullstack Development</option>
                              <option>Cyber Security</option>
                            </select>
                          </div>
                        </div>
                      </section>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base/7 font-semibold text-gray-900">
                        Mentorship Preferences
                      </h2>
                      <p className="mt-1 text-sm/6 text-gray-600">
                        Looking for a Mentor/Mentorship.
                      </p>

                      <div className="mt-10 space-y-10">
                        <fieldset>
                          <legend className="text-sm/6 font-semibold text-gray-900">
                            Are you looking for mentorship?
                          </legend>
                          <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                              <input
                                required
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                              <label
                                htmlFor="push-everything"
                                className="block text-sm/6 font-medium text-gray-900"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                              <input
                                required
                                id="push-email"
                                name="push-notifications"
                                type="radio"
                                className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                              <label
                                htmlFor="push-email"
                                className="block text-sm/6 font-medium text-gray-900"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <div className="col-span-full">
                          <label
                            htmlFor="goals"
                            className="block text-sm/6 font-medium text-gray-900"
                          >
                            Personal Goals
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="goals"
                              name="goals"
                              rows={3}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            ></textarea>
                          </div>
                          <p className="mt-3 text-sm/6 text-gray-600">
                            This could help refine suggestions for mentors,
                            events, or resources.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-900/10 py-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">
                      Social media handles
                    </h2>
                    <p className="mt-1 text-sm/6 text-gray-600">
                      Help fellow users find you easily.
                    </p>

                    <div className="mt-10 space-y-10 grid">
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="github"
                          className="block text-sm/6 font-medium text-gray-900"
                        >
                          Github
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                              github.com/
                            </span>
                            <input
                              required
                              type="text"
                              name="github"
                              id="github"
                              autoComplete="github"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                              placeholder="janesmith"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="linkedin"
                          className="block text-sm/6 font-medium text-gray-900"
                        >
                          Linkedin
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                              linkedin.com/
                            </span>
                            <input
                              required
                              type="text"
                              name="linkedin"
                              id="linkedin"
                              autoComplete="linkedin"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                              placeholder="janesmith"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      className="text-sm/6 font-semibold text-gray-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Confirm and create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
}