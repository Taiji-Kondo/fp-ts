import {memo, VFC} from "react";
import {useSelectProducts} from "../../hooks/useSelectProducts";
import {ShowButtonType} from "../../types/ShowButtonType";
import {useCalcCart} from "../../hooks/useCalcCart";

type CartListPropsType = ShowButtonType

export const CartList: VFC<Partial<CartListPropsType>> = memo(({ showAddButton = true, showRemoveButton = true }) => {
  const [carts, { addCart, removeCart }] = useSelectProducts()
  const [result] = useCalcCart()

  return (
    <>
      {
        carts.length ?
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
          : <p>Cart is Empty</p>
      }
      <div>{result}</div>
    </>
  )
})