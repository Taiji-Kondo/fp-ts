import {memo, VFC} from "react";
import { Link } from 'react-router-dom'
import {useSelectProducts} from "../../hooks/useSelectProducts";
import {ShowButtonType} from "../../types/ShowButtonType";

type CartListPropsType = ShowButtonType

export const CartList: VFC<Partial<CartListPropsType>> = memo(({ showAddButton = true, showRemoveButton = true }) => {
  const [carts, { addCart, removeCart }] = useSelectProducts()

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
                <p>{cart.name} x{cart.selectedCount}</p>
                {showAddButton && <button type='button' onClick={() => addCart(cart)}>ADD</button>}
                {showRemoveButton && <button type='button' onClick={() => removeCart(cart)}>REMOVE</button>}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
})