import {VFC} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Product from "./pages/product";
import Cart from "./pages/product/cart";
import {RecoilRoot} from "recoil";
import LayoutBase from "./layouts/LayoutBase";
import Home from "./pages/Home";
import ProductDetail from "./pages/product/detail";

const App: VFC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <h1>
          <Link to='/'>Functional Programing Practice</Link>
        </h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/product"
            render={({ match: { url } }) => (
              <Switch>
                <Route exact path={url}>
                  <LayoutBase pageTitle='Issuance of statement' pageSubTitle='Product'>
                    <Product />
                  </LayoutBase>
                </Route>
                <Route exact path={`${url}/:id`}>
                  <LayoutBase pageTitle='Issuance of statement' pageSubTitle='Product Detail'>
                    <ProductDetail />
                  </LayoutBase>
                </Route>
                <Route path={`${url}/cart`}>
                  <LayoutBase pageTitle='Issuance of statement' pageSubTitle='Cart'>
                    <Cart />
                  </LayoutBase>
                </Route>
              </Switch>
            )}
          />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
