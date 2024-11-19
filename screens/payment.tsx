'use client'
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from 'next/image';
import { FaGoogle, FaPaypal, FaCreditCard } from 'react-icons/fa';
import { PackageDeal } from '@/types';

interface PaymentProps {
  selectedPackage: PackageDeal;
}

const Payment: React.FC<PaymentProps> = ({ selectedPackage }) => {
  
  const [paymentMethod, setPaymentMethod] = useState<string>('credit-card');

  if (!selectedPackage) {
    return <div className="text-center text-2xl font-bold text-red-500">לא נבחרה חבילה</div>;
  }

  const { title, description, price, image } = selectedPackage;

  const handlePayment = (method: string) => {
    console.log(`מעבד תשלום באמצעות ${method}`);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-800 to-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md md:max-w-2xl lg:max-w-4xl rtl bg-white/90 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-black text-white">
          <CardTitle className="text-2xl md:text-3xl font-bold">{title}</CardTitle>
          <CardDescription className="text-white/80 md:text-lg">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <div className="md:flex md:space-x-8 md:space-x-reverse">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image src={image} alt={title} width={400} height={250} layout="responsive" objectFit="cover" />
              </div>
              <p className="text-3xl font-bold mt-4 text-center text-black">{price}</p>
            </div>
            <div className="md:w-1/2">
              <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="mt-6 md:mt-0">
                <TabsList className="grid w-full grid-cols-3 bg-black rounded-lg p-1">
                  <TabsTrigger value="credit-card" className="data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition-all">
                    <FaCreditCard className="mr-2" />
                    כרטיס אשראי
                  </TabsTrigger>
                  <TabsTrigger value="google-pay" className="data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition-all">
                    <FaGoogle className="mr-2" />
                    Google Pay
                  </TabsTrigger>
                  <TabsTrigger value="paypal" className="data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition-all">
                    <FaPaypal className="mr-2" />
                    PayPal
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="credit-card">
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="card-number" className="text-sm font-medium text-gray-700">מספר כרטיס</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-sm font-medium text-gray-700">תאריך תפוגה</Label>
                        <Input id="expiry" placeholder="MM/YY" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50" />
                      </div>
                      <div>
                        <Label htmlFor="cvc" className="text-sm font-medium text-gray-700">CVC</Label>
                        <Input id="cvc" placeholder="123" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone-number" className="text-sm font-medium text-gray-700">מספר טלפון</Label>
                      <Input id="phone-number" placeholder="050-123-4567" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50" />
                    </div>
                  </div>
                  <Button onClick={() => handlePayment('credit-card')} className="w-full mt-6 bg-gradient-to-r from-black to-black hover:from-gray-800 hover:to-gray-900 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                    שלם {price}
                  </Button>
                </TabsContent>
                <TabsContent value="google-pay">
                  <Button onClick={() => handlePayment('google-pay')} className="w-full mt-6 bg-white text-gray-700 border border-gray-300 font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md flex items-center justify-center">
                    <FaGoogle className="mr-2 text-blue-500" />
                    שלם באמצעות Google Pay
                  </Button>
                </TabsContent>
                <TabsContent value="paypal">
                  <Button onClick={() => handlePayment('paypal')} className="w-full mt-6 bg-[#0070ba] hover:bg-[#003087] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <FaPaypal className="mr-2" />
                    שלם באמצעות PayPal
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
