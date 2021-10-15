import { atom } from "recoil";
import {RecoilAtomKeys} from "../RecoilAtomKeys";
import {ProductType} from "../../types/product/ProductType";

export const cartsState = atom<ProductType[]>({
  key: RecoilAtomKeys.CARTS_STATE,
  default: []
})