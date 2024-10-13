'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Home, Info, Mail } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FruitLogo = () => (
  <motion.svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1 }}
  >
    <motion.path
      d="M20 5C14.5 5 10 9.5 10 15C10 20.5 14.5 25 20 25C25.5 25 30 20.5 30 15C30 9.5 25.5 5 20 5Z"
      fill="#FF6347"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.circle
      cx="15"
      cy="25"
      r="5"
      fill="#FFA500"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    />
    <motion.circle
      cx="25"
      cy="25"
      r="5"
      fill="#4169E1"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    />
  </motion.svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'דף הבית', icon: <Home size={20} /> },
    { name: 'אודות', icon: <Info size={20} /> },
    { name: 'צור קשר', icon: <Mail size={20} /> },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md" dir="rtl">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold ml-2 text-gray-200">לוגו</span>
        <FruitLogo />
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-4">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="flex items-center text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-gray-800"
          >
            <span className="ml-3">{item.name}</span>
            {item.icon}
          </Button>
        ))}
      </div>

      {/* Mobile menu (Dropdown) */}
      <DropdownMenu onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={isOpen ? "open" : "closed"}
            >
              <motion.path
                d="M4 6H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M4 6H20" },
                  open: { d: "M6 18L18 6" }
                }}
              />
              <motion.path
                d="M4 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
              />
              <motion.path
                d="M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M4 18H20" },
                  open: { d: "M6 6L18 18" }
                }}
              />
            </motion.svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {navItems.map((item) => (
            <DropdownMenuItem key={item.name}>
              <Button dir='rtl' variant="ghost" className="w-full justify-between text-lg font-semibold text-gray-800">
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
