import {memo, VFC} from "react";
import {SelectedProductType} from "../../types/product/SelectedProductType";

type CartListPropsType = {
  selectedProducts: SelectedProductType[]
}

export const CartList: VFC<CartListPropsType> = memo(({ selectedProducts }) => {
  return (
    <ul>
      {
        selectedProducts.map(({ id, name, selectedCount }) => {
          return (
            <li key={id}>
              <p>{name} x{selectedCount}</p>
            </li>
          )
        })
      }
    </ul>
  )
})