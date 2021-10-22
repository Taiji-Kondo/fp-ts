import { ProductDetailType } from './ProductDetailType'

export type ProductType = {
  id: number
  name: string
  price: number
  selectedCount?: number
  detail: ProductDetailType
}
