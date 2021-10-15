import {VFC} from "react";
import {ProductList} from "../../product/ProductList";
import {CartList} from "../../product/CartList";
import {useSelectProducts} from "../../../hooks/useSelectProducts";
import {Link} from "react-router-dom";

const PageProduct: VFC = () => {
  const [carts, {addCart}] = useSelectProducts()

  return (
    <>
      <h2>Issuance of statement</h2>

      <div>
        <h3 style={{borderBottom: '1px solid', paddingBottom: '20px', marginBottom: '0'}}>Products</h3>
        <div style={{display: 'flex'}}>
          <div style={{width: '80%'}}>
            <ProductList onClickAddButton={addCart} />

            <div style={{marginTop: '100px'}}>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Link to='/product/cart'>
                  <button type='button'>BUY</button>
                </Link>
              </div>
            </div>
          </div>
          {
            carts.length ?
            <div style={{width: '20%', height: '100vh', borderLeft: '1px solid'}}>
              <CartList showAddButton={false} />
            </div> : null
          }
        </div>
      </div>
    </>
  )
}

export default PageProduct