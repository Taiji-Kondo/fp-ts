import {memo, VFC} from "react";
import { Link } from 'react-router-dom'
import {useSelectProducts} from "../../hooks/useSelectProducts";

export const CartList: VFC = memo(() => {
  const [carts, { removeCart }] = useSelectProducts()

  return (
    <div style={{marginTop: "20px"}}>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Link to='/product/cart'>
          <button type='button'>BUY</button>
        </Link>
      </div>
      <ul>
        {
          carts.map((cart) => {
            return (
              <li key={cart.id}>
                <span>{cart.name} x{cart.selectedCount}</span>
                <button type='button' onClick={() => removeCart(cart)}>REMOVE</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
})