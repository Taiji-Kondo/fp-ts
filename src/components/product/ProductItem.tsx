import { memo, VFC } from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/product/ProductType'
import {Button} from "@chakra-ui/react";

type ProductItemPropsType = {
  product: ProductType
  onClickAddButton?: (product: ProductType) => void
  onClickRemoveButton?: (product: ProductType) => void
}

export const ProductItem: VFC<ProductItemPropsType> = memo(
  ({ product, onClickAddButton, onClickRemoveButton }) => {
    return (
      <article>
        <h1>NAME: {product.name}</h1>
        <span>PRICE: {product.price}</span>
        {onClickAddButton && (
          <Button type="button" onClick={() => onClickAddButton(product)}>
            ADD
          </Button>
        )}
        {onClickRemoveButton && (
          <Button type="button" onClick={() => onClickRemoveButton(product)}>
            REMOVE
          </Button>
        )}
        <div>
          <Link to={`/product/${product.id}`}>
            <Button>
              Show Detail
            </Button>
          </Link>
        </div>
      </article>
    )
  }
)
