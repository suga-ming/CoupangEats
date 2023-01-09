import { api } from "./axios";

interface ICartList {
  resultCode: number;
  data: {
    cartId: number;
    thumb: string;
    productName: string;
    price: number;
    quantity: number;
  };
}

export const cartlist = async (body: ICartList) => {
  console.log("list", cartlist);
  try {
    return await api.post("/cart", body);
  } catch (err) {
    console.log(err);
  }
};
