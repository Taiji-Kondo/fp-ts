import { useCallback } from 'react'
import { ProductType } from '../types/product/ProductType'
import { fold, fromNullable } from 'fp-ts/Option'
import { filter, map } from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/function'
import { useRecoilState } from 'recoil'
import { cartsState } from '../stores/atoms/cartState'

type useSelectProductsType = [
  ProductType[],
  {
    addCart: (product: ProductType) => void,
    removeCart: (product: ProductType) => void
  }
]

export const useSelectProducts = (): useSelectProductsType => {
  const [carts, setCarts] = useRecoilState(cartsState)

  const addCart = useCallback(
    (product: ProductType): void => {
      setCarts(_addedSelectedCountProduct(product))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [carts]
  )

  const removeCart = useCallback(
    (product: ProductType): void => {
      setCarts(_removedSelectedCountProduct(product))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [carts]
  )

  // 商品数をプラスしたい商品を引数にとって新しい商品一覧を返す
  const _addedSelectedCountProduct = (product: ProductType) =>
    pipe(
      _getSpecifiedProduct()(product),
      fold(
        () => {
          const addCountProduct = { ...product, selectedCount: 1 }
          return [...carts, addCountProduct]
        },
        (specified: ProductType) => {
          return _calcSelectedCount()(specified, true)
        }
      )
    )

  // 商品数をマイナスしたい商品を引数にとって新しい商品一覧を返す
  const _removedSelectedCountProduct = (product: ProductType): ProductType[] =>
    pipe(_calcSelectedCount()(product, false), _removeZeroSelectedCountProduct)

  // 該当する商品が存在するか検索する
  const _getSpecifiedProduct = (productions: ProductType[] = carts) => {
    return (product: ProductType) =>
      fromNullable(productions.find((selectedProduct) => selectedProduct.id === product.id))
  }

  const _calcSelectedCount = (productions: ProductType[] = carts) => {
    // operator ? increment : decrement
    return ({ id }: ProductType, operator: boolean) => {
      return map((selectedProduct: ProductType) => {
        if (selectedProduct.id !== id) return selectedProduct

        // 既にカートに存在する=selectedCountが存在するのでnon-null
        const selectedCount = operator
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          ? selectedProduct.selectedCount! + 1
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          : selectedProduct.selectedCount! - 1
        return { ...selectedProduct, selectedCount }
      })(productions)
    }
  }

  // 商品数が0の商品を取り除いた配列を返す
  const _removeZeroSelectedCountProduct = filter<ProductType>(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    (product: ProductType) => product.selectedCount! >= 1
  )

  return [carts, { addCart, removeCart }]
}
