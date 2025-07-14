import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react'
import { Menu, Search, ShoppingBagIcon, X } from 'lucide-react'
import { Marquee } from '../screens/landing'

const navigation = {
  pages: [
    { name: 'Shop', href: 'https://www.google.com' },
    { name: 'Bestseller', href: 'https://www.google.com' },
    { name: 'Brands', href: 'https://www.google.com' },
    { name: 'Sale', href: 'https://www.google.com' },
  ],
}

export default function Header() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="bg-transparent">
      <Dialog open={open} onClose={setOpen} className="relative z-40">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-primary-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-primary-black"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-5 cursor-pointer hover:text-primary-black/55 transition-colors duration-300" />
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-light text-primary-black hover:text-primary-black/55 transition-colors duration-300 font-outfit">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  target='_blank'
                  href="https://www.google.com"
                  className="-m-2 block p-2 font-light text-primary-black hover:text-primary-black/55 transition-colors duration-300 font-outfit">
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a
                  target='_blank'
                  href="https://www.google.com"
                  className="-m-2 block p-2 font-light text-primary-black hover:text-primary-black/55 transition-colors duration-300 font-outfit">
                  Create account
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a
                target='_blank'
                href="https://www.google.com"
                className="-m-2 flex items-center p-2 font-light text-primary-black hover:text-primary-black/55 transition-colors duration-300 font-outfit">
                <img
                  alt=""
                  src="/public/usa.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block">USD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <header className="relative w-full">
        <Marquee />
        <nav aria-label="Top" className="w-full px-6 sm:px-10 lg:px-14 pt-4 font-outfit">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center flex-1">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg- p-2 mr-4 text-primary-white cursor-pointer hover:text-primary-white/55 transition-colors duration-300 ">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Menu aria-hidden="true" className="size-6" />
              </button>
              <div className="hidden lg:flex h-full space-x-8">
                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center font-light cursor-pointer text-primary-white hover:text-primary-white/55 transition-colors duration-300"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center flex-shrink-0">
              <a
                target='_blank'
                href="https://www.ulta.com">
                <span className="sr-only">Ulta Beauty</span>
                <img
                  alt="Ulta Beauty Logo"
                  src="/ulta-logo.webp"
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <div className="flex items-center justify-end flex-1">
              <div className="hidden lg:flex lg:items-center lg:space-x-6">
                <a
                  target='_blank'
                  href="https://www.google.com"
                  className="font-light text-primary-white hover:text-primary-white/50 transition-color duration-300">
                  Sign in
                </a>
                <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                <a
                  target='_blank'
                  href="https://www.google.com"
                  className="font-light text-primary-white hover:text-primary-white/50 transition-color duration-300">
                  Create account
                </a>
              </div>

              <div className="hidden lg:ml-2 xl:ml-8 lg:flex">
                <a
                  target='_blank'
                  href="https://www.google.com"
                  className="flex items-center text-primary-white hover:text-primary-white/50 transition-color duration-300">
                  <img
                    alt=""
                    src="public/usa.svg"
                    className="block h-auto w-5 shrink-0"
                  />
                  <span className="ml-3 block font-light">USD</span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>

              <div className="flex lg:ml-6">
                <a
                  target='_blank'
                  href="https://www.google.com"
                  className="p-2 text-primary-white hover:text-primary-white/50 transition-color duration-300">
                  <span className="sr-only">Search</span>
                  <Search aria-hidden="true" className="size-6" />
                </a>
              </div>
              <div className="ml-4 flow-root lg:ml-6">
                <a
                  target='_blank'
                  href="https://www.google.com"
                  className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-primary-white group-hover:text-primary-white/50 transition-color duration-300"
                  />
                  <span className="ml-2 text-sm font-light text-primary-white group-hover:text-primary-white/50 transition-color duration-300">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
