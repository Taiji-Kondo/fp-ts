import {VFC} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Product from "./pages/product";
import Cart from "./pages/product/cart";
import {RecoilRoot} from "recoil";

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
                  <Product />
                </Route>
                <Route path={`${url}/cart`}>
                  <Cart />
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
