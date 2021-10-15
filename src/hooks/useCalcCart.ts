import { useRecoilValue } from "recoil";
import {cartsState} from "../stores/atoms/cartState";

export const useCalcCart = () => {
  const cartState = useRecoilValue(cartsState)

  const cartPriceList = cartState.map((cart) => cart.price * (cart.selectedCount ?? 1))
  const result = cartPriceList.reduce((prev, current) => prev + current, 0)

  return [result]
}