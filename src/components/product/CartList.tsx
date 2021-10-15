import {memo, VFC} from "react";
import { Link } from 'react-router-dom'
import {ProductType} from "../../types/product/ProductType";

type CartListPropsType = {
  selectedProducts: ProductType[]
  onClickRemoveButton: (product: ProductType) => void
}

export const CartList: VFC<CartListPropsType> = memo(({ selectedProducts, onClickRemoveButton }) => {
  return (
    <div style={{marginTop: "20px"}}>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Link to='/product/cart'>
          <button type='button'>BUY</button>
        </Link>
      </div>
      <ul>
        {
          selectedProducts.map((selectedProduct) => {
            return (
              <li key={selectedProduct.id}>
                <span>{selectedProduct.name} x{selectedProduct.selectedCount}</span>
                <button type='button' onClick={() => onClickRemoveButton(selectedProduct)}>REMOVE</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
})