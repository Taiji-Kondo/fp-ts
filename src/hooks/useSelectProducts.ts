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
      const addCountProducts = addSelectedCount()(specified.id)
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

  const getSpecifiedProduct = (product: ProductType): Option<ProductType> =>
    fromNullable(selectedProducts.find(
      (selectedProduct) => selectedProduct.id === product.id
    ))

  // const addSelectedCount = (productions: ProductType[], specifiedProductId: number): ProductType[] => {
  //   return productions.map((selectedProduct) => {
  //     if (selectedProduct.id !== specifiedProductId) return selectedProduct
  //     // 既にカートに存在する=selectedCountが存在するのでnon-null
  //     return {...selectedProduct, selectedCount: selectedProduct.selectedCount! + 1}
  //   })
  // }
  const addSelectedCount = (productions: ProductType[] = selectedProducts): (specifiedProductId: number) => ProductType[] => {
    return (specifiedProductId: number) => {
      return productions.map((selectedProduct) => {
        if (selectedProduct.id !== specifiedProductId) return selectedProduct
        // 既にカートに存在する=selectedCountが存在するのでnon-null
        return {...selectedProduct, selectedCount: selectedProduct.selectedCount! + 1}
      })
    }
  }

  return [selectedProducts, {addProduct, removeProduct}] as const
}

