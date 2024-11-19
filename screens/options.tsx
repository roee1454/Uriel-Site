'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from 'next/image';
import { ForkKnifeCrossed } from 'lucide-react';
import Link from 'next/link';
import { PackageDeal } from '@/types';

interface PackageCardProps extends PackageDeal {
  index: number;
}

const PackageCard: React.FC<PackageCardProps> = ({ id, title, description, price, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full"
    >
      <Card className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-black p-4">
          <CardTitle className="text-right text-white text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="aspect-square relative mb-4">
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-md"
            />
          </div>
          <p className="text-right text-gray-700">{description}</p>
          <p className="text-right font-bold mt-2 text-gray-900">{price}</p>
        </CardContent>
        <CardFooter className="flex justify-end p-4">
          <Link href={`/payment/${id}`} className={buttonVariants({ variant: "default", className: "bg-black text-white hover:bg-opacity-80 transition-colors" })}>הזמן עכשיו</Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

interface OptionsProps {
  packages: PackageDeal[];
}

const Options: React.FC<OptionsProps> = ({ packages }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-start bg-gradient-to-br from-black via-gray-800 to-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-7xl font-bold text-center mb-8 text-white">חבילות פירות טריים</h1>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .3 }}
          className="text-5xl font-extrabold text-center mb-8 text-white flex justify-center items-center space-x-2"
        >
          <ForkKnifeCrossed className="font-bold text-white text-8xl" size={64} />
        </motion.h1>
        {packages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((deal, index) => (
              <PackageCard key={index} {...deal} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-white text-xl mt-8">חבילות יגיעו בקרוב, הישארו מעודכנים!</p>
        )}
      </div>
    </div>
  );
};

export default Options;
