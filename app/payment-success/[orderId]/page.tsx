import { getOrder } from "@/lib/supabase/order";
import PaymentSuccess from "@/screens/payment-success";

export default async function page({ params }: { params: { orderId: string } }) {
  try {
    const order = await getOrder(params.orderId);
    return <PaymentSuccess order={order} />;
  } catch (error) {
    console.error("Failed to fetch order:", error);
    return <div>לא תקין, הזמנה לא נמצאה</div>;
  }
}