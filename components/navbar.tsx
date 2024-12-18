'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Home, Info } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';
import { getLogo } from "@/lib/supabase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'דף הבית', icon: <Home size={20} />, href: "/" },
    { name: 'נגישות', icon: <Info size={20} />, href: "/accessibility" },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 flex items-center justify-between p-8 bg-black shadow-xl w-full z-50" dir="rtl">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={getLogo()} alt="Fruity Box" width={32} height={32} />
      </Link>

      {/* Desktop menu */}
      <div className="hidden lg:flex space-x-4">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button
              variant="ghost"
              className="flex items-center p-4 text-lg font-bold hover:bg-white transition-colors duration-200 text-white"
            >
              <span className="ml-3">{item.name}</span>
              {item.icon}
            </Button>
          </Link>
        ))}
      </div>

      {/* Tablet menu */}
      <div className="hidden md:flex lg:hidden space-x-2">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button
              variant="ghost"
              className="flex items-center hover:bg-gray-800 transition-colors duration-200 text-white"
            >
              <span className="ml-2">{item.name}</span>
              {item.icon}
            </Button>
          </Link>
        ))}
      </div>

      {/* Mobile menu (Dropdown) */}
      <DropdownMenu onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <span className="text-white">{isOpen ? '✖' : '☰'}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {navItems.map((item) => (
            <DropdownMenuItem key={item.name}>
              <Link href={item.href}>
                <Button dir='rtl' variant="ghost" className="w-full justify-between text-lg font-semibold text-black">
                  <span className="ml-3">{item.name}</span>
                  {item.icon}
                </Button>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export { Navbar };
