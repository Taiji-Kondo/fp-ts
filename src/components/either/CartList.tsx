import {memo, VFC} from "react";
import {ProductType} from "../../types/product/ProductType";

type CartListPropsType = {
  selectedProducts: ProductType[]
  onClickRemoveButton: (product: ProductType) => void
}

export const CartList: VFC<CartListPropsType> = memo(({ selectedProducts, onClickRemoveButton }) => {
  return (
    <ul>
      {
        selectedProducts.map((selectedProduct) => {
          return (
            <li key={selectedProduct.id}>
              <p>{selectedProduct.name} x{selectedProduct.selectedCount}</p>
              <button onClick={() => onClickRemoveButton(selectedProduct)}>REMOVE</button>
            </li>
          )
        })
      }
    </ul>
  )
})