import {useCallback, useState} from "react";
import {ProductType} from "../types/product/ProductType";
import { Option, fold, fromNullable } from 'fp-ts/Option';
import {filter, map} from 'fp-ts/lib/Array';
import { pipe } from 'fp-ts/function'

export const useSelectProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([])

  const addProduct = useCallback((product: ProductType): void => {
    const specifiedProduct = getSpecifiedProduct(product)
    fold(() => {
      const addCountProduct = {...product, selectedCount: 1}
      setSelectedProducts([...selectedProducts, addCountProduct])
    }, (specified: ProductType) => {
      const addCountProducts = calcSelectedCount()(specified, true)
      setSelectedProducts(addCountProducts)
    })(specifiedProduct)
  }, [selectedProducts])

  const removeProduct = useCallback((product: ProductType): void => {
    setSelectedProducts(removedSelectedCountProduct(product))
  }, [selectedProducts])

  const getSpecifiedProduct = (product: ProductType): Option<ProductType> =>
    fromNullable(selectedProducts.find(
      (selectedProduct) => selectedProduct.id === product.id
    ))

  const calcSelectedCount = (productions: ProductType[] = selectedProducts) => {
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

  // 変更したい商品を引数にとって新しい商品一覧を返す
  const removedSelectedCountProduct = (product: ProductType): ProductType[] => pipe(
    calcSelectedCount()(product, false),
    removeZeroSelectedCountProduct
  )

  // 商品数が0の商品を取り除いた配列を返す
  const removeZeroSelectedCountProduct = filter<ProductType>(
    (product: ProductType) => product.selectedCount! >= 1)

  return [selectedProducts, {addProduct, removeProduct}] as const
}

