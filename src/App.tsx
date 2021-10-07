import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Either from "./pages/either";

function App() {
  return (
    <BrowserRouter>
      <h1>Functional Programing Practice</h1>
      <Switch>
        <Route exact path="/">
          TOP
        </Route>
        <Route path="/either">
          <Either />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
