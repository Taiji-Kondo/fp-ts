import {memo, VFC} from "react";
import {Route, Switch} from "react-router-dom";
import {Routes} from "./Routes";
import LayoutBase from "../layouts/LayoutBase";
import Page404 from "../pages/Page404";
import Home from "../pages/Home";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route path="/" exact>
        <LayoutBase pageTitle='Issuance of statement' pageSubTitle='Home'>
          <Home />
        </LayoutBase>
      </Route>
      {Routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          render={({ match: { url } }) => (
            <Switch>
              {route.children.map((childrenRoute) => (
                <Route key={`${route.path}-${childrenRoute.path}`} exact={childrenRoute.exact} path={`${url}${childrenRoute.path}`}>
                  <LayoutBase pageTitle={childrenRoute.title} pageSubTitle={childrenRoute.subTitle}>
                    {childrenRoute.children}
                  </LayoutBase>
                </Route>
              ))}
            </Switch>
          )}
        />
      ))}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
})