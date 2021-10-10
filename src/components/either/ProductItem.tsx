import {VFC} from "react";
import {ProductType} from "../../types/product/ProductType";

type ProductItemPropsType = {
  product: ProductType
  onClickAddButton: (product: ProductType) => void
}

export const ProductItem: VFC<ProductItemPropsType> = ({ product, onClickAddButton }) => {
  return (
    <article>
      <h1>NAME: {product.name}</h1>
      <span>PRICE: {product.price}</span>
      <button type="button" onClick={() => onClickAddButton(product)}>ADD</button>
    </article>
  )
}