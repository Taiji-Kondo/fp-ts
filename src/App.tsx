import {VFC} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

import {RecoilRoot} from "recoil";
import { Router } from './router/Router';

const App: VFC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <h1>
          <Link to='/'>Functional Programing Practice</Link>
        </h1>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
