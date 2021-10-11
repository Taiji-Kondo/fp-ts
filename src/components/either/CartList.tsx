import {memo, VFC} from "react";
import {SelectedProductType} from "../../types/product/SelectedProductType";
import {ProductType} from "../../types/product/ProductType";

type CartListPropsType = {
  selectedProducts: SelectedProductType[]
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