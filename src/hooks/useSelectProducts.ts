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
      const addCountProducts = selectedProducts.map((selectedProduct) => {
        if (selectedProduct.id !== specified.id) return selectedProduct
        // 既にカートに存在する=selectedCountが存在するのでnon-null
        return {...selectedProduct, selectedCount: selectedProduct.selectedCount! + 1}
      })
      setSelectedProducts(addCountProducts)
    })(specifiedProduct)
  }, [selectedProducts])

  const removeProduct = useCallback((product: ProductType): void => {
    // 商品がカートにない場合は削除ボタンはでない
    const removeCountProducts = selectedProducts.map((selectedProduct) => {
      if (selectedProduct.id !== product.id) return selectedProduct
      // カートに存在する=selectedCountが存在するのでnon-null
      return {...selectedProduct, selectedCount: selectedProduct.selectedCount! - 1}
    })

    const formatProducts = removeCountProducts.filter(
      // カートに存在する=selectedCountが存在するのでnon-null
      (formatProduct) => formatProduct.selectedCount! >= 1)
    setSelectedProducts(formatProducts)
  }, [selectedProducts])

  const getSpecifiedProduct = (product: ProductType): Option<ProductType> => {
    const selectedProduct = selectedProducts.find(
      (selectedProduct) => selectedProduct.id === product.id
    )
    return fromNullable(selectedProduct)
  }

  return [selectedProducts, {addProduct, removeProduct}] as const
}

