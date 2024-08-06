export type TOrderedProducts = {
  _id: string;
  name: string;
  qty: number;
  price: number;
  category: string;
};

export type TOrderInfo = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  optionalWhatsAppNumber?: string;
  address: string;
  paymentMethod: "cash on";
  division: string;
  products: TOrderedProducts[];
  amount: number;
};
