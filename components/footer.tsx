'use client'
import React from 'react';
import Link from 'next/link';
import { Facebook } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">כתובת</h3>
            <p>רחוב הפירות 123</p>
            <p>תל אביב, ישראל</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">עקבו אחרינו</h3>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="pl-0">
                <Facebook className="h-6 w-6 ml-2" />
                פייסבוק
              </Button>
            </Link>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">נגישות</h3>
            <Link href="/accessibility" className="hover:underline">
              אנו מחויבים לספק אתר נגיש לכולם. אם נתקלתם בבעיות נגישות, אנא צרו איתנו קשר.
            </Link>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">מדיניות פרטיות</h3>
            <Link href="/privacy-policy" className="hover:underline">
              קראו את מדיניות הפרטיות שלנו
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
