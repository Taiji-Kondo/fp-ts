import {useCallback, useState} from "react";
import {SelectedProductType} from "../types/product/SelectedProductType";
import {ProductType} from "../types/product/ProductType";

export const useSelectProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProductType[]>([])

  const addProduct = useCallback((product: ProductType): void => {
    const specifiedProduct = getSpecifiedProduct(product)
    if (specifiedProduct) {
      const addCountProducts = selectedProducts.map((selectedProduct) => {
        if (selectedProduct.id !== specifiedProduct.id) return selectedProduct
        return {...selectedProduct, selectedCount: selectedProduct.selectedCount + 1}
      })
      setSelectedProducts(addCountProducts)
    } else {
      const addCountProduct = {...product, selectedCount: 1}
      setSelectedProducts([...selectedProducts, addCountProduct])
    }
  }, [selectedProducts])

  const removeProduct = useCallback((product: ProductType): void => {
    // 商品がカートにない場合は削除ボタンはでないので
    const removeCountProducts = selectedProducts.map((selectedProduct) => {
      if (selectedProduct.id !== product.id) return selectedProduct
      return {...selectedProduct, selectedCount: selectedProduct.selectedCount - 1}
    })

    const formatProducts = removeCountProducts.filter(
      (formatProduct) => formatProduct.selectedCount >= 1)
    setSelectedProducts(formatProducts)
  }, [selectedProducts])

  const getSpecifiedProduct = (product: ProductType): SelectedProductType | null => {
    const selectedProduct = selectedProducts.find(
      (selectedProduct) => selectedProduct.id === product.id
    )
    return selectedProduct ?? null
  }

  return [selectedProducts, {addProduct, removeProduct}] as const
}

