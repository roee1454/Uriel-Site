'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Home, Info, Mail } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'דף הבית', icon: <Home size={20} /> },
    { name: 'אודות', icon: <Info size={20} /> },
    { name: 'צור קשר', icon: <Mail size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-8 bg-black shadow-xl w-full z-50" dir="rtl">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold ml-2 text-white">Fruity Box</span>
      </Link>

      {/* Desktop menu */}
      <div className="hidden lg:flex space-x-4">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="flex items-center p-4 text-lg font-bold hover:bg-white hover:text-black transition-colors duration-200 text-white"
          >
            <span className="ml-3">{item.name}</span>
            {item.icon}
          </Button>
        ))}
      </div>

      {/* Tablet menu */}
      <div className="hidden md:flex lg:hidden space-x-2">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="flex items-center hover:bg-gray-800 transition-colors duration-200 text-white"
          >
            <span className="ml-2">{item.name}</span>
            {item.icon}
          </Button>
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
              <Button dir='rtl' variant="ghost" className="w-full justify-between text-lg font-semibold text-white">
                <span className="ml-3">{item.name}</span>
                {item.icon}
              </Button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export { Navbar };
