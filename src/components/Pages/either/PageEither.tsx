import {useState, VFC} from "react";
import {ProductType} from "../../../types/product/ProductType";

const APPLE: ProductType = {
  id: 1,
  name: 'apple',
  price: 100
}
const ORANGE: ProductType = {
  id: 2,
  name: 'orange',
  price: 80
}
const BANANA: ProductType = {
  id: 1,
  name: 'banana',
  price: 200
}

const PRODUCTS = [APPLE, ORANGE, BANANA]

const PageEither: VFC = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>()

  const findSpecifiedforSelectedProducts = (id: number): number[] => {
    const specifiedProducts = selectedProducts?.filter((product) => product === id)
    return specifiedProducts ?? []
  }

  const addProduct = (id: number): void => {
    const newSelectedProducts = selectedProducts ? [...selectedProducts, id] : [id]
    setSelectedProducts(newSelectedProducts)
  }

  return (
    <>
      <div>Issuance of statement</div>

      <div>
        <h2>Products</h2>
        <ul>
          {
            PRODUCTS.map(({ id, name, price }) => {
              return (
                <li>
                  <article>
                    <h1>NAME: {name}</h1>
                    <span>PRICE: {price}</span>
                    <button type="button" onClick={() => addProduct(id)}>ADD</button>
                  </article>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default PageEither