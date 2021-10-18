import {memo, VFC} from "react";
import {Route, Switch} from "react-router-dom";
import {Routes} from "./Routes";
import LayoutBase from "../layouts/LayoutBase";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      {Routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          render={({ match: { url } }) => (
            <Switch>
              {route.children.map((route) => (
                <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                  <LayoutBase pageTitle={route.title} pageSubTitle={route.subTitle}>
                    {route.children}
                  </LayoutBase>
                </Route>
              ))}
            </Switch>
          )}
        />
      ))}
      {/*<Route path="*">*/}
      {/*  <Page404 />*/}
      {/*</Route>*/}
    </Switch>
  )
})