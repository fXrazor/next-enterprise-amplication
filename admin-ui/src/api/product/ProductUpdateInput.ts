import { InputJsonValue } from "../../types";

export type ProductUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: InputJsonValue;
};
