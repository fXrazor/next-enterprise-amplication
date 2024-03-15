import { Customer } from "../customer/Customer";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  productId: string | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
