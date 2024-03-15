import { InputJsonValue } from "../../types";

export type ProductCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: InputJsonValue;
};
