import {VFC} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Product from "./pages/product";
import Cart from "./pages/product/cart";

const App: VFC = () => {
  return (
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
  );
}

export default App;
