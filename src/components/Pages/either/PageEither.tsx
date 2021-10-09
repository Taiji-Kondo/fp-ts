import { VFC } from "react";
import {ProductType} from "../../../types/product/ProductType";

const apple: ProductType = {
  id: 1,
  name: 'apple',
  price: 100
}

const PageEither: VFC = () => {
  console.log(apple)
  return (
    <div>Issuance of statement</div>
  )
}

export default PageEither