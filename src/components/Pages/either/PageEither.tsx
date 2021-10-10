import {useState, VFC} from "react";
import {ProductType} from "../../../types/product/ProductType";
import {PRODUCTS} from "../../../constants/Products";
import {SelectedProductType} from "../../../types/product/SelectedProductType";

const PageEither: VFC = () => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProductType[]>()

  const addProduct = (product: ProductType): void => {
    if (selectedProducts) {
      const specifiedProduct = getSpecifiedProduct(product)
      if (specifiedProduct) {
        const addCountProducts = selectedProducts.map((selectedProduct) => {
          if (selectedProduct.id !== specifiedProduct.id) return selectedProduct
          return {...selectedProduct, selectedCount: selectedProduct.selectedCount + 1}
        })
        setSelectedProducts(addCountProducts)
      } else {
        const addCountProduct = {...product, selectedCount: 1}
        setSelectedProducts([...selectedProducts, addCountProduct])
      }
    } else {
      const addCountProduct = {...product, selectedCount: 1}
      setSelectedProducts([addCountProduct])
    }
  }

  const getSpecifiedProduct = (product: ProductType): SelectedProductType | null => {
    const selectedProduct = selectedProducts!.find(
      (selectedProduct) => selectedProduct.id === product.id
    )
    return selectedProduct ?? null
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
                    <li key={product.id} style={{width: '33.33%'}}>
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
                  selectedProducts.map(({ id, name, selectedCount }) => {
                    return (
                      <li key={id}>
                        <p>{name} x{selectedCount}</p>
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