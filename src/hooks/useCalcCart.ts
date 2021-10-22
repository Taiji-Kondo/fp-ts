import { useRecoilValue } from 'recoil'
import { cartsState } from '../stores/atoms/cartState'
import { map, reduce } from 'fp-ts/lib/Array'
import { ProductType } from '../types/product/ProductType'
import { pipe } from 'fp-ts/function'

export const useCalcCart = (): number[] => {
  const cartState = useRecoilValue(cartsState)

  const _cartPriceList = map((cart: ProductType) => cart.price * (cart.selectedCount ?? 1))
  const _sumPrice = reduce(0, (prev: number, current: number) => prev + current)

  const result = (products: ProductType[]) => pipe(_cartPriceList(products), _sumPrice)

  return [result(cartState)]
}
