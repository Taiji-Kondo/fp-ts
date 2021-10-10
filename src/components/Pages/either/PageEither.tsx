import {useState, VFC} from "react";
import {ProductType} from "../../../types/product/ProductType";

const apple: ProductType = {
  id: 1,
  name: 'apple',
  price: 100
}

const PageEither: VFC = () => {
  const [products, setProducts] = useState<ProductType[]>()

  const findSpecifiedCountOfProducts = ({ id }: Pick<ProductType, 'id'>): number => {
    const specifiedProducts = products?.filter((product) => product.id === id)
    return specifiedProducts ? specifiedProducts.length : 0
  }

  return (
    <div>Issuance of statement</div>
  )
}

export default PageEither