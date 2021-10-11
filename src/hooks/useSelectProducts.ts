import {useCallback, useState} from "react";
import {SelectedProductType} from "../types/product/SelectedProductType";
import {ProductType} from "../types/product/ProductType";

export const useSelectProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProductType[]>()

  const addProduct = useCallback((product: ProductType): void => {
    if (selectedProducts) {
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
    } else {
      const addCountProduct = {...product, selectedCount: 1}
      setSelectedProducts([addCountProduct])
    }
  }, [selectedProducts])

  const getSpecifiedProduct = useCallback((product: ProductType): SelectedProductType | null => {
    const selectedProduct = selectedProducts!.find(
      (selectedProduct) => selectedProduct.id === product.id
    )
    return selectedProduct ?? null
  }, [selectedProducts])

  return [selectedProducts, addProduct] as const
}

