import {useState, VFC} from "react";
import {ProductType} from "../../../types/product/ProductType";
import {PRODUCTS} from "../../../constants/Products";

const PageEither: VFC = () => {
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>()

  // const findSpecifiedForSelectedProducts = (id: number): number[] => {
  //   const specifiedProducts = selectedProducts?.filter((product) => product === id)
  //   return specifiedProducts ?? []
  // }

  const addProduct = (product: ProductType): void => {
    const newSelectedProducts = selectedProducts ? [...selectedProducts, product] : [product]
    setSelectedProducts(newSelectedProducts)
  }

  return (
    <>
      <div>Issuance of statement</div>

      <div>
        <h2 style={{borderBottom: '1px solid', paddingBottom: '20px', marginBottom: '0'}}>Products</h2>
        <div style={{display: 'flex'}}>
          <div style={{width: '80%'}}>
            <ul style={{display: 'flex'}}>
              {
                PRODUCTS.map((product) => {
                  return (
                    <li style={{width: '33.33%'}}>
                      <article>
                        <h1>NAME: {product.name}</h1>
                        <span>PRICE: {product.price}</span>
                        <button type="button" onClick={() => addProduct(product)}>ADD</button>
                      </article>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          {
            selectedProducts &&
            <div style={{width: '20%', height: '100vh', borderLeft: '1px solid'}}>
              <ul>
                {
                  selectedProducts.map(({ name }) => {
                    return (
                      <li>
                        <p>{name}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default PageEither