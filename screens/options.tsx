'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePackageStore } from '@/store/packageStore';
import { useEffect } from 'react';

export interface PackageDeal {
  title: string;
  description: string;
  price: string;
  image: string;
}

const packageDeals: PackageDeal[] = [
  {
    title: "חבילה בסיסית",
    description: "מבחר פירות טריים לשבוע",
    price: "₪99",
    image: "/images/basic-package.jpg",
  },
  {
    title: "חבילה משפחתית",
    description: "מגוון פירות גדול לכל המשפחה",
    price: "₪179",
    image: "/images/family-package.jpg",
  },
  {
    title: "חבילת פרימיום",
    description: "פירות אקזוטיים ונדירים",
    price: "₪249",
    image: "/images/premium-package.jpg",
  },
];

interface PackageCardProps extends PackageDeal {
  index: number;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, description, price, image, index }) => {
  const router = useRouter();
  const setSelectedPackage = usePackageStore(state => state.setSelectedPackage);
  const selectedPackage = usePackageStore(state => state.selectedPackage);

  const handleOrderClick = () => {
    setSelectedPackage({ title, description, price, image });
  };

  useEffect(() => {
    if (selectedPackage) {
      router.push('/payment');
    }
  }, [selectedPackage, router]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-right">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video relative mb-4">
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-md"
            />
          </div>
          <p className="text-right">{description}</p>
          <p className="text-right font-bold mt-2">{price}</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleOrderClick}>הזמן עכשיו</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Options: React.FC = () => {
  return (
    <div className="container mx-auto py-12 bg-gradient-to-br from-purple-500 to-indigo-600 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">חבילות פירות טריים</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packageDeals.map((deal, index) => (
          <PackageCard key={index} {...deal} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Options;
