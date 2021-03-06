import { memo, VFC } from 'react'
import { PRODUCTS } from '../../constants/Products'
import { ProductType } from '../../types/product/ProductType'
import { ProductItem } from './ProductItem'

type ProductListPropsType = {
  onClickAddButton: (product: ProductType) => void
  onClickRemoveButton: (product: ProductType) => void
}

export const ProductList: VFC<Partial<ProductListPropsType>> = memo(
  ({ onClickAddButton, onClickRemoveButton }) => {
    return (
      <ul style={{ display: 'flex' }}>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id} style={{ width: '33.33%' }}>
              <ProductItem
                product={product}
                onClickAddButton={onClickAddButton}
                onClickRemoveButton={onClickRemoveButton}
              />
            </li>
          )
        })}
      </ul>
    )
  }
)
