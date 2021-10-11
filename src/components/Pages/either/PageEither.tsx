import {VFC} from "react";
import {ProductList} from "../../either/ProductList";
import {CartList} from "../../either/CartList";
import {useSelectProducts} from "../../../hooks/useSelectProducts";

const PageEither: VFC = () => {
  const [selectedProducts, {addProduct, removeProduct}] = useSelectProducts()

  return (
    <>
      <h2>Issuance of statement</h2>

      <div>
        <h3 style={{borderBottom: '1px solid', paddingBottom: '20px', marginBottom: '0'}}>Products</h3>
        <div style={{display: 'flex'}}>
          <div style={{width: '80%'}}>
            <ProductList onClickAddButton={addProduct} />
          </div>
          {
            selectedProducts &&
            <div style={{width: '20%', height: '100vh', borderLeft: '1px solid'}}>
              <CartList selectedProducts={selectedProducts} onClickRemoveButton={removeProduct} />
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default PageEither