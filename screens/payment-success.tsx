'use client'

import { Order } from "@/types";

interface PaymentSuccessProps { 
  order: Order;
}

export default function PaymentSuccess({ order }: PaymentSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-400 mb-4">הזמנה נוצרה בהצלחה</h1>
        <p className="text-lg text-gray-300 mb-2">שם החבילה: {order.packageOrdered.title}</p>
        <p className="text-lg text-gray-300 mb-2">כתובת: {order.address}</p>
        <p className="text-lg text-gray-300 mb-2">מספר הזמנה: {order.id}</p>
        <p className="text-lg text-gray-300 mb-2">תאריך הזמנה: {new Date(order.orderedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}