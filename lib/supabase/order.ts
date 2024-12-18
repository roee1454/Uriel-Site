import { Order } from "@/types";
import { supabase } from ".";

export const createOrder = async (order: Order) => {
  const { error } = await supabase.from('orders').insert(order);
  if (error) {
    throw error;
  }
  return order.id;
};

export const getOrder = async (orderId: string) => {
  const { data, error } = await supabase.from('orders').select('*').eq('id', orderId);
  if (error) {
    console.error(error);
    throw error;
  }

  console.log(data);

  return data[0];
};