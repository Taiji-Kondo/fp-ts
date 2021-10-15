import {memo, VFC} from "react";
import {ProductType} from "../../types/product/ProductType";

type ProductItemPropsType = {
  product: ProductType
  onClickAddButton?: (product: ProductType) => void
  onClickRemoveButton?: (product: ProductType) => void
}

export const ProductItem: VFC<ProductItemPropsType> = memo(({ product, onClickAddButton, onClickRemoveButton }) => {
  return (
    <article>
      <h1>NAME: {product.name}</h1>
      <span>PRICE: {product.price}</span>
      {onClickAddButton &&<button type="button" onClick={() => onClickAddButton(product)}>ADD</button>}
      {onClickRemoveButton &&<button type="button" onClick={() => onClickRemoveButton(product)}>REMOVE</button>}
    </article>
  )
})