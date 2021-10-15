import { atom } from "recoil";
import {RecoilAtomKeys} from "../RecoilAtomKeys";
import {ProductType} from "../../types/product/ProductType";

export const cartState = atom<ProductType[]>({
  key: RecoilAtomKeys.CART_STATE,
  default: []
})