import {VFC} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Product from "./pages/product";
import Cart from "./pages/product/cart";
import {RecoilRoot} from "recoil";
import LayoutBase from "./layouts/LayoutBase";

const App: VFC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <h1>Functional Programing Practice</h1>
        <Switch>
          <Route exact path="/">
            TOP
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
