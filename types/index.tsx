export interface PackageDeal {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface Personal {
  place: string,
  content: string,
}

export interface Order {
  id: number;
  clientName: string;
  clientPaymentMethod: 'card' | 'paypal' | 'googlePay';
  packageOrdered: Partial<PackageDeal>;
  orderedAt: string;
  address: string;
  status: 'pending' | 'sent' | 'canceled';
}
