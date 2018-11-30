import React from "react";
import { Switch, Route, BrowserRouter, HashRouter} from "react-router-dom";
import App from "./App.jsx";

const Root = () => (
  <div>
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/view" component={App} />
        <Route path="/add" component={App} />
      </Switch>
    </HashRouter>
  </div>
);

export default Root;
