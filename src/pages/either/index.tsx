import { VFC } from "react";
import {ProductType} from "../../types/product/ProductType";

const apple: ProductType = {
  id: 1,
  name: 'apple',
  price: 100
}

const Either: VFC = () => {
  console.log(apple)
  return (
    <div>Either</div>
  )
}

export default Either