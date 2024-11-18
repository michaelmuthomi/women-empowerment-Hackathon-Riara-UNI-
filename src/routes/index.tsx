import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <HomePage />
}

function HomePage(){
  function sendEmail() {
    console.log("Email sent")
  }
  return(
    <div className="w-full">
    <header className="relative h-max grid items-center absolute inset-0 bg-slate-900 bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5">
        <div className="px-4 sm:px-6 md:px-8 fixed top-0 w-full bg-slate-900 z-10 pb-8">
            <div className="sticky inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] index_beams__yWcJT">
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
                style={{ maskImage: 'linear-gradient(to bottom, transparent, black)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)' }}>
            </div>
            </div>
            <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
            <img src="src/assets/img/logo.png" className="w-14 h-10 object-contain" />
            <div className="flex items-center gap-x-4">
                <button type="button" className="-m-3 block p-3 md:hidden">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
                    className="w-6 h-6 text-slate-900 dark:text-white">
                    <path d="M12 6.75v10.5M6.75 12h10.5"></path>
                </svg>
                </button>
                <nav className="hidden md:flex gap-x-6">
                <ul className="flex items-center gap-x-8">
                    <li><a className="hover:text-sky-500 dark:hover:text-sky-400 text-white" href="#">Home</a></li>
                    <li><a className="hover:text-sky-500 dark:hover:text-sky-400 text-white" href="#about">About</a></li>
                    <li><a className="hover:text-sky-500 dark:hover:text-sky-400 text-white" href="#products">Services</a></li>
                    <li><a className="hover:text-sky-500 dark:hover:text-sky-400 text-white" href="#courses">Courses</a></li>
                    <li><a className="hover:text-sky-500 dark:hover:text-sky-400 text-white" href="#faqs">FAQs</a></li>
                    <li><a className="hover:text-sky-500 dark:hover:text-sky-400 text-white" href="#contact">Contact Us</a></li>
                </ul>
                </nav>
            </div>
            </div>
        </div>
        <section className="py-10 pt-40 flex flex-col items-center gap-6">
            <div>
                <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
                    We Stand with Women<br /> Building a Brighter Future Together
                </h1>
                <p className="mt-6 text-xl text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                    The Perfect Space for Women to Rise! <br />Unlocking Education, Growth, and Empowerment
                </p>
            </div>
            <a href="/signup" className="flex w-max px-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get Started today &rarr;
            </a>
        </section>
    </header>
      
    <main className="main">
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0" id="about">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                <defs>
                  <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                  <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
              </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base/7 font-semibold text-indigo-600">Empowering Women in Tech: Breaking Barriers Together</p>
                    <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">A Platform for Connection, Collaboration, and Mentorship</h1>
                    <p className="mt-6 text-base/7 text-gray-700">
                        In a field that is dominated by men, women who want to work in technology frequently encounter particular difficulties, such as loneliness and the need to prove themselves all the time. The absence of professional connections and mentorship opportunities is one of the main challenges. In the computer industry, a lot of women look for female mentors and colleagues who can empathize with their experiences, comprehend the gender-specific obstacles they encounter, and offer the assistance they require. Regretfully, men frequently face different obstacles and, in some situations, aren't always able or ready to mentor women in the same manner.
                    </p>
                  </div>
                </div>
              </div>
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="src/assets/img/collaboration-platform.jpg" alt="" />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                    <p>This is where our solution comes in. We’ve created a platform designed to give women in tech the space to connect, collaborate, and mentor one another—providing the support system many of us have been missing. Together, we can break the barriers and create a more inclusive, empowering tech community.</p>
                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                      <li className="flex gap-x-3">
                        <svg className="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
                        </svg>
                        <span><strong className="font-semibold text-gray-900">Connect with Like-minded Women.</strong> Find female mentors and peers who truly understand the unique challenges you face in the tech industry.</span>
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" />
                        </svg>
                        <span><strong className="font-semibold text-gray-900">Build Your Network</strong> Create meaningful professional relationships that support your career and personal growth.</span>
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                          <path fill-rule="evenodd" d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clip-rule="evenodd" />
                        </svg>
                        <span><strong className="font-semibold text-gray-900">Empowerment Through Knowledge</strong> Access resources, events, and tools that help you succeed in your tech journey—without the isolation.</span>
                      </li>
                    </ul>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No More Feeling Left Out, Take Charge of Your Path.</h2>
                    <p className="mt-6">With our platform, women in tech can finally come together, collaborate in an environment where they feel understood, and grow with the support of their peers. It's time to stop feeling overlooked and start feeling empowered.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="mx-auto max-w-[40rem] lg:max-w-none px-4">
            <h1 className="text-base/7 font-semibold text-indigo-500">Get Started</h1>
            <p className="mt-3 max-w-4xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Explore our components in action.
            </p>
          
            <ol className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <li className="flex">
          <svg className="size-11 flex-none overflow-visible" fill="none">
            <defs>
              <filter id="step-icon-0" x="-3" y="-1" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="2"></feOffset>
                <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0.054902 0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0.12 0"></feColorMatrix>
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_804_95228"></feBlend>
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_804_95228" result="shape"></feBlend>
              </filter>
            </defs>
            <g filter="url(#step-icon-0)">
              <path d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z" fill="#EEF2FF"></path>
              <path d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
            <path d="M11.75 8.75h12.5a3 3 0 0 1 3 3v20.5a3 3 0 0 1-3 3h-12.5a3 3 0 0 1-3-3v-20.5a3 3 0 0 1 3-3Z" fill="#fff" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path opacity=".4" d="M29.75 35.25h2.5a3 3 0 0 0 3-3v-20.5a3 3 0 0 0-3-3h-20.5a3 3 0 0 0-3 3v7.5" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M30.25 19.75v4.5" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <a href="book.html" className="ml-6">
            <h2 className="flex items-center text-sm/6 font-semibold">
              <span className="text-indigo-500">Step 1</span>
              <span className="ml-2 h-4 w-px bg-slate-300"></span>
              <span className="ml-2 text-slate-900">Book a Visit</span>
            </h2>
            <p className="mt-2 text-sm/7 text-slate-600">Meet our executives and get your questions answered.</p>
          </a>
              </li>
          
              <li className="flex">
          <svg className="size-11 flex-none overflow-visible" fill="none">
            <defs>
              <filter id="step-icon-1" x="-3" y="-1" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="2"></feOffset>
                <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0.054902 0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0.12 0"></feColorMatrix>
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_804_95228"></feBlend>
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_804_95228" result="shape"></feBlend>
              </filter>
            </defs>
            <g filter="url(#step-icon-1)">
              <path d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z" fill="#EEF2FF"></path>
              <path d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
            <path opacity=".4" d="M28.75 35.25h3.5a3 3 0 0 0 3-3v-20.5a3 3 0 0 0-3-3h-20.5a3 3 0 0 0-3 3v7.5" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M8.75 24.75a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-11.5a3 3 0 0 1-3-3v-7.5Z" fill="#fff"></path>
            <path d="M10.75 23.5h12.5V22h-12.5v1.5Zm13.75 1.25v8.5H26v-8.5h-1.5Zm-1.25 9.75h-11.5V36h11.5v-1.5ZM9.5 32.25v-7.5H8v7.5h1.5Zm2.25 2.25a2.25 2.25 0 1 0 4.5 0h-4.5Zm6.5 0a2.25 2.25 0 1 0 4.5 0h-4.5Z" fill="#6366F1" opacity=".2"></path>
          </svg>
          <div className="ml-6">
            <h2 className="flex items-center text-sm/6 font-semibold">
              <span className="text-indigo-500">Step 2</span>
              <span className="ml-2 h-4 w-px bg-slate-300"></span>
              <span className="ml-2 text-slate-900">Choose Your Path</span>
            </h2>
            <p className="mt-2 text-sm/7 text-slate-600">Select your path and we will provide the necessary services.</p>
          </div>
              </li>
          
              <li className="flex">
          <svg className="size-11 flex-none overflow-visible" fill="none">
            <defs>
              <filter id="step-icon-2" x="-3" y="-1" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="2"></feOffset>
                <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0.054902 0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0.12 0"></feColorMatrix>
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_804_95228"></feBlend>
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_804_95228" result="shape"></feBlend>
              </filter>
            </defs>
            <g filter="url(#step-icon-2)">
              <path d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z" fill="#EEF2FF"></path>
              <path d="M2.75 10A7.25 7.25 0 0 1 10 2.75h24A7.25 7.25 0 0 1 41.25 10v24A7.25 7.25 0 0 1 34 41.25H10A7.25 7.25 0 0 1 2.75 34V10Z" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
            <path d="M11.75 8.75h12.5a3 3 0 0 1 3 3v20.5a3 3 0 0 1-3 3h-12.5a3 3 0 0 1-3-3v-20.5a3 3 0 0 1 3-3Z" fill="#fff" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path opacity=".4" d="M29.75 35.25h2.5a3 3 0 0 0 3-3v-20.5a3 3 0 0 0-3-3h-20.5a3 3 0 0 0-3 3v7.5" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M30.25 19.75v4.5" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <div className="ml-6">
            <h2 className="flex items-center text-sm/6 font-semibold">
              <span className="text-indigo-500">Step 3</span>
              <span className="ml-2 h-4 w-px bg-slate-300"></span>
              <span className="ml-2 text-slate-900">Pursue Your Dreams</span>
            </h2>
            <p className="mt-2 text-sm/7 text-slate-600">Begin your journey with our guidance and resources like education and job opportunities.</p>
          </div>
              </li>
            </ol>
          </div>
          
        <div className="bg-gray-50 py-24 sm:py-32" id="products">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-center text-base/7 font-semibold text-indigo-600">Our services</h2>
              <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Everything you need to get started</p>
              <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                <div className="relative lg:row-span-2">
                  <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Mentorship Programs</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Connect with experienced female mentors who understand the challenges women face in the tech industry.</p>
                    </div>
                    <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                      <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                        <img className="size-full object-cover object-top" src="src/assets/img/mentorship.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                </div>
                <div className="relative max-lg:row-start-1">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Networking Opportunities</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Our platform offers networking events, online forums, and group discussions where you can connect with peers.</p>
                    </div>
                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                      <img className="w-full max-lg:max-w-xs rounded-10" src="src/assets/img/networking.jpg" alt="" />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                </div>
                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                  <div className="absolute inset-px rounded-lg bg-white"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">All-Female Collaboration Teams</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Find and collaborate with fellow female tech enthusiasts on projects, hackathons, and challenges</p>
                    </div>
                    <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                      <img className="h-[min(152px,40cqw)] object-cover object-center w-full" src="src/assets/img/collaboration.jpg" alt="" />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                </div>
                <div className="relative lg:row-span-2">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Personal and Professional Development</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Access to resources, workshops, and courses focused on personal and professional growth.</p>
                    </div>
                    <div className="relative min-h-[30rem] w-full grow">
                      <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                        <div className="flex bg-gray-800/40 ring-1 ring-white/5 h-full">
                            <img className="h-[min(152px,40cqw)] object-cover object-center w-full h-full " src="src/assets/img/personal.jpg" alt="" />
                        </div>
                        <div className="px-6 pb-14 pt-6">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                </div>
              </div>
            </div>
          </div>
            
        <div className="bg-white py-24 sm:py-32" id="courses">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Courses Provided by Us</h2>
                <p className="mt-2 text-lg/8 text-gray-600">
                    This courses provide comprehensive approaches to both technical and soft skills, ensuring women have the resources to succeed in their tech careers
                </p>
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">Starting Nov 15, 2024</time>
                    <a  className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Available</a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a >
                        <span className="absolute inset-0"></span>
                        Leadership and Communication for Women in Tech
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Build leadership skills and learn effective communication techniques tailored to women in tech. This course helps you thrive in leadership roles and collaborate effectively in male-dominated</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-goog/events/Musanga_1HCfS6S.png" alt="" className="size-10 rounded-full bg-gray-50" />
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        <a >
                          <span className="absolute inset-0"></span>
                          Elizabeth Musanga
                        </a>
                      </p>
                      <p className="text-gray-600">UI/UX Designer & WTM Ambassador</p>
                    </div>
                  </div>
                </article>
                <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime="2020-03-16" className="text-gray-500">Starting Nov 15, 2024</time>
                      <a  className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Available</a>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <a >
                          <span className="absolute inset-0"></span>
                          Soft Skills for Success in Tech
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Develop essential soft skills to complement your technical abilities, such as teamwork, time management, emotional intelligence, and critical thinking.</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/Annunziata.jpg" alt="" className="size-10 rounded-full bg-gray-50" />
                      <div className="text-sm/6">
                        <p className="font-semibold text-gray-900">
                          <a >
                            <span className="absolute inset-0"></span>
                            Annunziata Kinya
                          </a>
                        </p>
                        <p className="text-gray-600">Android Engineer</p>
                      </div>
                    </div>
                  </article>
                <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime="2020-03-16" className="text-gray-500">Starting Nov 15, 2024</time>
                      <a  className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Available</a>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <a >
                          <span className="absolute inset-0"></span>
                          Building Your Personal Brand in Tech
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Learn how to establish and grow your personal brand in the tech world. This course focuses on networking, online presence, and how to leverage your unique story.</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/karey_njeri_ulcZhLo.jpeg" alt="" className="size-10 rounded-full bg-gray-50" />
                      <div className="text-sm/6">
                        <p className="font-semibold text-gray-900">
                          <a >
                            <span className="absolute inset-0"></span>
                            Wangari Njeri
                          </a>
                        </p>
                        <p className="text-gray-600">Organizer - Media & Communication</p>
                      </div>
                    </div>
                </article>
              </div>
            </div>
          </div>

          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <img className="mx-auto h-12" src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg" alt="" />
              <figure className="mt-10">
                <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                  <p>"Jane felt isolated as a junior developer, struggling to advance in a male-dominated workplace. After joining our platform, she connected with a mentor, participated in workshops, and built a supportive network. Six months later, Jane was promoted to team lead and now mentors others, crediting her success to the guidance and community she found here."</p>
                </blockquote>
                <figcaption className="mt-10">
                  <img className="mx-auto size-10 rounded-full" src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/pamela_chemutai_uWEEiTb.jpg" alt="" />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Pamela Chemutai</div>
                    <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div className="text-gray-600">GDG Lead Organizer</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
          
        <section className="bg-gray-900" id="faqs">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white dark:text-white">Frequently asked questions</h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Who can join your platform?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Anyone who identifies as a woman and is interested in pursuing or advancing a career in technology is welcome to join. Whether you're a student, a professional, or someone looking to switch careers, our platform is designed to support women at all stages of their tech journey.</p>
                        </div>
                        <div className="mb-10">                        
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Do I need any prior tech experience to join?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">No! Whether you're a beginner or an experienced tech professional, there are resources and courses for all skill levels. We offer everything from introductory programming courses to advanced technical training, as well as leadership and soft skills development.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                How do I find a mentor?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Once you sign up, you can browse through our mentor directory or join one of our mentorship programs. You’ll be matched with a mentor based on your career goals, interests, and experience level. You can also join mentorship events where you can meet multiple mentors.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Is the platform free to use?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">We offer a mix of free and premium content. Access to basic resources, community forums, and some introductory courses is free. For more specialized courses, exclusive events, and mentorship opportunities, there are subscription options available.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Can I participate in the courses if I have a busy schedule?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Absolutely! Our courses are designed to be flexible and self-paced, so you can learn at your own convenience. We also offer recorded webinars and online workshops that you can access whenever fits your schedule.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Will I be able to work with other women only on projects?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Yes! One of the unique features of our platform is the ability to form or join all-female teams for hackathons, projects, and challenges. You can also collaborate with other women on group assignments and share your experiences in a safe, supportive environment.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                How do I access the courses?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Once you sign up for the platform, you’ll get access to all the available courses. You can choose to enroll in any course that fits your needs and interests. All our content is accessible online, and you can learn at your own pace.</p>
                        </div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                Can I attend events or networking opportunities if I’m not local?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">Yes! We offer both in-person and virtual events, including networking meetups, workshops, and speaker sessions. Virtual events ensure that women from all around the world can connect and collaborate.                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contact">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
              <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h2>
              <p className="mt-2 text-lg/8 text-gray-600">Have a question? You ask us below.</p>
            </div>
            <form id="contact-form" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">First name</label>
                  <div className="mt-2.5">
                    <input type="text" name="first-name" id="first-name" autoComplete="text" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">Last name</label>
                  <div className="mt-2.5">
                    <input type="text" name="last-name" id="last-name" autoComplete="text" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" required />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email</label>
                  <div className="mt-2.5">
                    <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" required />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">Message</label>
                  <div className="mt-2.5">
                    <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" required></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
              </div>
              <p id="success-message" className="mt-4 text-green-500 hidden text-center">Your message has been sent successfully!</p>
            </form>
          </div>
  
    </main>

    <footer className="dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-center">
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Presented by the Kemu team</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    <script src="../assets/js/scrollreveal.min.js"></script>

    
    <script src="../assets/js/main.js"></script>
    </div>
  )
}