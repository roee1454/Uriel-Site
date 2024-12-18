import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { getPersonalTexts } from '@/lib/supabase/personal';

const Footer = async () => {

  const personalTexts = await getPersonalTexts();

  return (
    <footer className="bg-black text-gray-300 py-8" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4">כתובת</h3>
            <p>{personalTexts.find(p => p.place === 'address')?.content}</p>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4">עקבו אחרינו</h3>
            <Link href={personalTexts.find(p => p.place === 'facebook-link')?.content || ''} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="pl-0">
                פייסבוק
                <Facebook className="h-6 w-6 ml-2" />
              </Button>
            </Link>
            <Link href={personalTexts.find(p => p.place === 'instagram-link')?.content || ''} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="pl-0">
                אינסטגרם
                <Instagram className="h-6 w-6 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4">נגישות</h3>
            <Link href="/accessibility" className="hover:underline">
              לחץ כאן להצהרת נגישות
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} כל הזכויות שמורות לחנות הפירות שלנו</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
