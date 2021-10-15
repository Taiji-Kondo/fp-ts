import {useSelectProducts} from "./useSelectProducts";

export const useCalcCart = () => {
  const [carts] = useSelectProducts()

  const cartPriceList = carts.map((cart) => cart.price * (cart.selectedCount ?? 1))
  const result = cartPriceList.reduce((prev, current) => prev + current, 0)

  return [result]
}