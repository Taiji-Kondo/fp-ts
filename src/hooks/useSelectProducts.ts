import {useCallback, useState} from "react";
import {ProductType} from "../types/product/ProductType";
import { Option, fold, fromNullable } from 'fp-ts/Option';

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
    // 商品がカートにない場合は削除ボタンはでない
    const removeCountProducts = calcSelectedCount()(product, false)
    const formatProducts = removeCountProducts.filter(
      // カートに存在する=selectedCountが存在するのでnon-null
      (formatProduct) => formatProduct.selectedCount! >= 1)
    setSelectedProducts(formatProducts)
  }, [selectedProducts])

  const getSpecifiedProduct = (product: ProductType): Option<ProductType> =>
    fromNullable(selectedProducts.find(
      (selectedProduct) => selectedProduct.id === product.id
    ))

  const calcSelectedCount = (productions: ProductType[] = selectedProducts) => {
    // operator ? increment : decrement
    return ({ id }: ProductType, operator: boolean) => {
      return productions.map((selectedProduct) => {
        if (selectedProduct.id !== id) return selectedProduct

        // 既にカートに存在する=selectedCountが存在するのでnon-null
        const selectedCount = operator ? (selectedProduct.selectedCount! + 1) : (selectedProduct.selectedCount! - 1)
        return {...selectedProduct, selectedCount}
      })
    }
  }

  return [selectedProducts, {addProduct, removeProduct}] as const
}

