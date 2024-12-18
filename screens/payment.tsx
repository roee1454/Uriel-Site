'use client'

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import valid from 'card-validator'
import Image from "next/legacy/image";
import { FaGoogle, FaPaypal, FaCreditCard } from 'react-icons/fa';
import { PackageDeal, Order } from '@/types';
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { createOrder } from '@/lib/supabase/order';
import { useRouter } from 'next/navigation';  

interface PaymentProps {
  selectedPackage: PackageDeal;
}

interface FormValues {
  clientName: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
  phoneNumber: string;
  address: string;
}

const Payment: React.FC<PaymentProps> = ({ selectedPackage }) => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<FormValues>();

  if (!selectedPackage) {
    return <div className="text-center text-2xl font-bold text-red-500">לא נבחרה חבילה</div>;
  }

  const { title, description, price, image } = selectedPackage;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    const card = valid.number(data.cardNumber);

    if (!card.isValid) {
      form.setError('cardNumber', { message: 'מספר כרטיס שגוי' });
      setLoading(false);
      return;
    }

    const expiry = valid.expirationDate(data.expiry);

    if (!expiry.isValid) {
      form.setError('expiry', { message: 'תאריך תפוגה שגוי' });
      setLoading(false);
      return;
    }

    const cvc = valid.cvv(data.cvc);

    if (!cvc.isValid) {
      form.setError('cvc', { message: 'CVC שגוי' });
      setLoading(false);
      return;
    }

    const order: Order = {
      id: Math.floor(Math.random() * 1e16),
      clientName: data.clientName,
      clientPaymentMethod: paymentMethod as 'card' | 'paypal' | 'googlePay',
      packageOrdered: selectedPackage,
      orderedAt: new Date().toISOString(),
      address: data.address,
      status: 'pending',
    };
    

    const orderId = await createOrder(order);

    console.log(orderId);

    if (orderId) {
      router.push(`/payment-success/${orderId}`);
    } else {
      form.setError('root', { message: 'שגיאה בעת ייצור הזמנה' });
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-800 to-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md md:max-w-2xl lg:max-w-4xl rtl bg-white/90 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-black text-white">
          <CardTitle className="text-2xl md:text-3xl font-bold">{title}</CardTitle>
          <CardDescription className="text-white/80 md:text-lg">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="md:flex md:space-x-8 md:space-x-reverse">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <Image src={image} alt={title} width={400} height={400} layout="responsive" objectFit="cover" />
                  </div>
                  <p className="text-3xl font-bold mt-4 text-center text-black">{price}</p>
                </div>
                <div className="md:w-1/2">
                  <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="mt-6 md:mt-0">
                    <TabsList className="grid w-full grid-cols-3 bg-black rounded-lg p-1">
                      <TabsTrigger value="card" className="data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition-all">
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
                    <TabsContent value="card">
                      <div className="space-y-4 mt-4">
                        <FormField name="clientName" control={form.control} render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="client-name" className="text-sm font-medium text-gray-700">בעל הכרטיס</FormLabel>
                            <FormControl>
                              <Input id="client-name" {...field} {...form.register("clientName", { required: "This field is required" })} placeholder="שם בעל הכרטיס" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50" />
                            </FormControl>
                            {form.formState.errors.clientName && <FormMessage>{form.formState.errors.clientName.message}</FormMessage>}
                          </FormItem>
                        )} />
                        <FormField name="cardNumber" control={form.control} render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="card-number" className="text-sm font-medium text-gray-700">מספר כרטיס</FormLabel>
                            <FormControl>
                              <Input id="card-number" {...field} {...form.register("cardNumber", { required: "This field is required" })} placeholder="1234 5678 9012 3456" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50" />
                            </FormControl>
                            {form.formState.errors.cardNumber && <FormMessage>{form.formState.errors.cardNumber.message}</FormMessage>}
                          </FormItem>
                        )} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField name="expiry" control={form.control} render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="expiry" className="text-sm font-medium text-gray-700">תאריך תפוגה</FormLabel>
                              <FormControl>
                                <Input id="expiry" {...field} {...form.register("expiry", { required: "This field is required" })} placeholder="MM/YY" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50" />
                              </FormControl>
                              {form.formState.errors.expiry && <FormMessage>{form.formState.errors.expiry.message}</FormMessage>}
                            </FormItem>
                          )} />
                          <FormField name="cvc" control={form.control} render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="cvc" className="text-sm font-medium text-gray-700">CVC</FormLabel>
                              <FormControl>
                                <Input id="cvc" {...field} {...form.register("cvc", { required: "This field is required" })} placeholder="123" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50" />
                              </FormControl>
                              {form.formState.errors.cvc && <FormMessage>{form.formState.errors.cvc.message}</FormMessage>}
                            </FormItem>
                          )} />
                        </div>
                        <FormField name="phoneNumber" control={form.control} render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="phone-number" className="text-sm font-medium text-gray-700">מספר טלפון</FormLabel>
                            <FormControl>
                              <Input id="phone-number" {...field} {...form.register("phoneNumber", { required: "This field is required" })} placeholder="050-123-4567" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50" />
                            </FormControl>
                            {form.formState.errors.phoneNumber && <FormMessage>{form.formState.errors.phoneNumber.message}</FormMessage>}
                          </FormItem>
                        )} />
                        <FormField name="address" control={form.control} render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="address" className="text-sm font-medium text-gray-700">כתובת</FormLabel>
                            <FormControl>
                              <Input id="address" {...field} {...form.register("address", { required: "This field is required" })} placeholder="כתובת מלאה" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50" />
                            </FormControl>
                            {form.formState.errors.address && <FormMessage>{form.formState.errors.address.message}</FormMessage>}
                          </FormItem>
                        )} />
                      </div>
                      <Button type="submit" className="w-full mt-6 bg-gradient-to-r from-black to-black hover:from-gray-800 hover:to-gray-900 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105" disabled={loading}>
                        {loading ? 'מעבד...' : `שלם ${price}`}
                      </Button>
                    </TabsContent>
                    <TabsContent value="google-pay">
                      <Button type="submit" className="w-full mt-6 bg-white text-gray-700 border border-gray-300 font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md flex items-center justify-center" disabled={loading}>
                        <FaGoogle className="mr-2 text-blue-500" />
                        {loading ? 'מעבד...' : 'שלם באמצעות Google Pay'}
                      </Button>
                    </TabsContent>
                    <TabsContent value="paypal">
                      <Button type="submit" className="w-full mt-6 bg-[#0070ba] hover:bg-[#003087] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center" disabled={loading}>
                        <FaPaypal className="mr-2" />
                        {loading ? 'מעבד...' : 'שלם באמצעות PayPal'}
                      </Button>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
