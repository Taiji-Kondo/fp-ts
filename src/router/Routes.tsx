import Product from "../pages/product";
import Cart from "../pages/product/cart";
import {ReactElement} from "react";
import ProductDetail from "../pages/product/detail";

export type RouteType = {
  path: string
  children: BaseRoutesType[]
}

type BaseRoutesType = {
  path: string
  exact: boolean
  title: string
  subTitle: string
  children: ReactElement
}

export const Routes: RouteType[] = [
  {
    path: '/product',
    children: [
      {
        path: '/',
        exact: true,
        title: 'Issuance of statement',
        subTitle: 'Product',
        children: <Product />,
      },
      {
        path: '/cart',
        exact: false,
        title: 'Issuance of statement',
        subTitle: 'Cart',
        children: <Cart />,
      },
      {
        path: '/:id',
        exact: false,
        title: 'Issuance of statement',
        subTitle: 'Product Detail',
        children: <ProductDetail />,
      },
    ]
  },
]