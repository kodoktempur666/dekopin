"use client"

import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Disclosure } from "@headlessui/react"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar({ className = "" }: { className?: string }) {
  const navigationItems = [
    {
      title: "Tentang Kami",
      href: "/about",
    },
    {
      title: "Berita",
      href: "/news",
    },
    {
      title: "Layanan",
      href: "/services",
      items: [
        { title: "Pusat Pelatihan & Pembelajaran Koperasi (LMS)", href: "/e-learning" },
        { title: "E-Course dan Membership", href: "/membership" },
        { title: "Temu Bisnis", href: "/temu-bisnis" },
      ],
    },
    {
      title: "Produk",
      href: "/products",
    },
    {
      title: "Progam Kerja",
      href: "/program-kerja",
    },

  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Disclosure as="header" className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {({ open }) => (
        <>
          <div className={`container flex h-16 items-center justify-between px-4 md:px-6 ${className}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <Image src="/logo2.png" alt="Logo" width={60} height={40} />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-gray-900">DEKOPINWIL</div>
                <div className="text-sm text-gray-600">Jawa Tengah</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.items ? (
                        <>
                          <NavigationMenuTrigger className="text-gray-700 hover:text-sky-600">
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="grid w-[400px] p-2">
                              {item.items.map((subItem) => (
                                <NavigationMenuLink key={subItem.title} asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sky-50 hover:text-sky-600"
                                  >
                                    <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-sky-50 hover:text-sky-600"
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-sky-600 focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t shadow-md">
              <div className="flex flex-col px-4 py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      className="block py-2 font-medium text-gray-700 hover:text-sky-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.items && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block text-sm text-gray-600 hover:text-sky-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </Disclosure>
  )
}
