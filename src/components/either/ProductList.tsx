import {VFC} from "react";
import {PRODUCTS} from "../../constants/Products";
import {ProductType} from "../../types/product/ProductType";

type ProductListPropsType = {
  onClickAddButton: (product: ProductType) => void
}

export const ProductList: VFC<ProductListPropsType> = ({ onClickAddButton }) => {
  return (
    <ul style={{display: 'flex'}}>
      {
        PRODUCTS.map((product) => {
          return (
            <li key={product.id} style={{width: '33.33%'}}>
              <article>
                <h1>NAME: {product.name}</h1>
                <span>PRICE: {product.price}</span>
                <button type="button" onClick={() => onClickAddButton(product)}>ADD</button>
              </article>
            </li>
          )
        })
      }
    </ul>
  )
}