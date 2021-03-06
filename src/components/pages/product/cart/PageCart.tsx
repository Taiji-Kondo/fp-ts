import { VFC } from 'react'
import { CartList } from '../../../product/CartList'
import { useCalcCart } from '../../../../hooks/useCalcCart'
import { Link } from 'react-router-dom'
import {Button} from "@chakra-ui/react";

const PageCart: VFC = () => {
  const [result] = useCalcCart()

  return (
    <>
      <CartList />
      <div style={{ marginTop: '60px' }}>
        <div style={{ font: '24px', fontWeight: 'bold' }}>RESULT: ¥{result}</div>
      </div>
      <Link to="/product">
        <Button>
          Back
        </Button>
      </Link>
    </>
  )
}

export default PageCart
