import { memo, VFC } from 'react'
import { useSelectProducts } from '../../hooks/useSelectProducts'
import { ShowButtonType } from '../../types/ShowButtonType'
import {Button} from "@chakra-ui/react";

type CartListPropsType = ShowButtonType

export const CartList: VFC<Partial<CartListPropsType>> = memo(
  ({ showAddButton = true, showRemoveButton = true }) => {
    const [carts, { addCart, removeCart }] = useSelectProducts()

    return (
      <>
        {carts.length ? (
          <ul>
            {carts.map((cart) => {
              return (
                <li key={cart.id}>
                  <p>
                    {cart.name} x{cart.selectedCount}
                  </p>
                  {showAddButton && (
                    <Button type="button" onClick={() => addCart(cart)}>
                      ADD
                    </Button>
                  )}
                  {showRemoveButton && (
                    <Button type="button" onClick={() => removeCart(cart)}>
                      REMOVE
                    </Button>
                  )}
                </li>
              )
            })}
          </ul>
        ) : (
          <p>Cart is Empty</p>
        )}
      </>
    )
  }
)
