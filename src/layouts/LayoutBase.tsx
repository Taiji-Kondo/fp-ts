import {ReactNode, VFC} from "react";

type LayoutBasePropsType = {
  pageTitle: string
  pageSubTitle: string
  children: ReactNode
}

const LayoutBase: VFC<LayoutBasePropsType> = ({ pageTitle, pageSubTitle, children }) => {
  return (
    <>
      <h2>{pageTitle}</h2>

      <div>
        <h3 style={{borderBottom: '1px solid', paddingBottom: '20px', marginBottom: '0'}}>{pageSubTitle}</h3>
        {children}
      </div>
    </>
  )
}

export default LayoutBase