import {VFC} from "react";
import {CartList} from "../../../product/CartList";
import {useCalcCart} from "../../../../hooks/useCalcCart";

const PageCart: VFC = () => {
  const [result] = useCalcCart()

  return (
    <>
      <CartList />
      <div style={{marginTop: '60px'}}>
        <div style={{font: '24px', fontWeight: 'bold'}}>RESULT: ¥{result}</div>
      </div>
    </>
  )
}

export default PageCart