import {useCallback} from "react";
import {ProductType} from "../types/product/ProductType";
import { fold, fromNullable } from 'fp-ts/Option';
import {filter, map} from 'fp-ts/lib/Array';
import { pipe } from 'fp-ts/function'
import { useRecoilState } from "recoil";
import {cartState} from "../stores/atoms/cartState";

export const useSelectProducts = () => {
  const [cart, setCart] = useRecoilState(cartState)

  const addCart = useCallback((product: ProductType): void => {
    setCart(_addedSelectedCountProduct(product))
  }, [cart])

  const removeCart = useCallback((product: ProductType): void => {
    setCart(_removedSelectedCountProduct(product))
  }, [cart])

  // 商品数をプラスしたい商品を引数にとって新しい商品一覧を返す
  const _addedSelectedCountProduct = (product: ProductType) => pipe(
    _getSpecifiedProduct()(product),
    fold(() => {
        const addCountProduct = {...product, selectedCount: 1}
        return [...cart, addCountProduct]
      },
      (specified: ProductType) => {
        return _calcSelectedCount()(specified, true)
      }
    )
  )

  // 商品数をマイナスしたい商品を引数にとって新しい商品一覧を返す
  const _removedSelectedCountProduct = (product: ProductType): ProductType[] => pipe(
    _calcSelectedCount()(product, false),
    _removeZeroSelectedCountProduct
  )

  // 該当する商品が存在するか検索する
  const _getSpecifiedProduct = (productions: ProductType[] = cart) => {
    return (product: ProductType) => fromNullable(productions.find(
      (selectedProduct) => selectedProduct.id === product.id
    ))
  }

  const _calcSelectedCount = (productions: ProductType[] = cart) => {
    // operator ? increment : decrement
    return ({ id }: ProductType, operator: boolean) => {
      return map((selectedProduct: ProductType) => {
        if (selectedProduct.id !== id) return selectedProduct

        // 既にカートに存在する=selectedCountが存在するのでnon-null
        const selectedCount = operator ? (selectedProduct.selectedCount! + 1) : (selectedProduct.selectedCount! - 1)
        return {...selectedProduct, selectedCount}
      })(productions)
    }
  }

  // 商品数が0の商品を取り除いた配列を返す
  const _removeZeroSelectedCountProduct = filter<ProductType>(
    (product: ProductType) => product.selectedCount! >= 1)

  return [cart, {addCart, removeCart}] as const
}

