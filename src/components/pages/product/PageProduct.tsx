import {VFC} from "react";
import {ProductList} from "../../product/ProductList";
import {CartList} from "../../product/CartList";
import {useSelectProducts} from "../../../hooks/useSelectProducts";

const PageProduct: VFC = () => {
  const [cart, {addCart, removeCart}] = useSelectProducts()

  return (
    <>
      <h2>Issuance of statement</h2>

      <div>
        <h3 style={{borderBottom: '1px solid', paddingBottom: '20px', marginBottom: '0'}}>Products</h3>
        <div style={{display: 'flex'}}>
          <div style={{width: '80%'}}>
            <ProductList onClickAddButton={addCart} />
          </div>
          {
            cart.length ?
            <div style={{width: '20%', height: '100vh', borderLeft: '1px solid'}}>
              <CartList selectedProducts={cart} onClickRemoveButton={removeCart} />
            </div> : null
          }
        </div>
      </div>
    </>
  )
}

export default PageProduct