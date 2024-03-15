import { JsonValue } from "type-fest";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders: JsonValue;
  updatedAt: Date;
};
