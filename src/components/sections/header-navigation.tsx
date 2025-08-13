"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, ShoppingCart, Facebook, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const MoniDayLogo = () => (
  <Link href="/" className="flex items-center focus:outline-none transition-transform hover:scale-105">
    <Image
      src="/logo.png"
      alt="MoniDay Logo"
      width={140}
      height={45}
      className="h-10 w-auto object-contain"
      priority
    />
  </Link>
);

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'SHOP', href: '/shop' },
  { label: 'ACCOUNT', href: '/account' },
  { label: 'CONTACT', href: '/contact' },
  { label: 'BECOME A DISTRIBUTOR', href: '/distributor' },
];

const legalItems = [
  { title: "Privacy Policy", href: "/privacy", description: "Read our privacy policy and how we protect your data." },
  { title: "Terms of Service", href: "/terms", description: "Understand our terms and conditions for using our services." },
  { title: "Return Policy", href: "/returns", description: "Learn about our process for product returns and refunds." },
];

const HeaderNavigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-secondary-blue via-primary-blue to-secondary-blue text-white shadow-xl sticky top-0 z-50 font-primary backdrop-blur-sm bg-opacity-95">
      {/* Main navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <MoniDayLogo />
          
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <Link href={item.href} className="bg-transparent text-white hover:bg-white/15 focus:bg-white/15 text-sm font-semibold uppercase tracking-wide px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none">
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/15 focus:bg-white/15 text-sm font-semibold uppercase tracking-wide px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none">
                    LEGAL
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[300px] bg-white rounded-lg shadow-xl border border-gray-100">
                       {legalItems.map((item) => (
                         <li key={item.title}>
                            <Link
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                            >
                                <div className="text-sm font-medium leading-none text-primary-blue">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-600 font-secondary mt-1">
                                    {item.description}
                                </p>
                            </Link>
                         </li>
                       ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/10">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors p-2 rounded-full hover:bg-white/10">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/919022988843" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors p-2 rounded-full hover:bg-white/10">
                <FaWhatsapp size={22} />
              </a>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <Link href="/cart" className="relative flex items-center p-2 rounded-full hover:bg-white/15 transition-all duration-200 hover:scale-110">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-lg animate-pulse">
                    0
                </span>
            </Link>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
             <Link href="/cart" className="relative flex items-center p-2 rounded-full hover:bg-white/15 transition-colors">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-lg">
                    0
                </span>
            </Link>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/15 focus:bg-white/15 focus:text-white rounded-lg focus:outline-none">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
                             <SheetContent side="right" className="w-[300px] bg-white text-gray-900 border-l-0 p-0">
                                   <div className="p-6 h-full flex flex-col">
                    <div className="mb-8">
                       <Link href="/" className="flex items-center focus:outline-none transition-transform hover:scale-105">
                         <Image
                           src="/logo.png"
                           alt="MoniDay Logo"
                           width={180}
                           height={60}
                           className="h-12 w-auto object-contain"
                           priority
                         />
                       </Link>
                    </div>
                   <nav className="flex flex-col space-y-2 flex-grow">
                     {[...navItems, { label: 'LEGAL', href: '/legal' }].map((item) => (
                       <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 text-base font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 uppercase tracking-wide text-gray-900">
                         {item.label}
                       </Link>
                     ))}
                   </nav>
                    <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-center space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100">
                             <Facebook size={24} />
                         </a>
                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors p-2 rounded-full hover:bg-gray-100">
                             <Instagram size={24} />
                         </a>
                         <a href="https://wa.me/919022988843" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors p-2 rounded-full hover:bg-gray-100">
                             <FaWhatsapp size={26} />
                         </a>
                    </div>
                 </div>
               </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;
