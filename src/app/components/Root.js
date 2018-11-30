import React from "react";
import { Switch, Route, BrowserRouter, HashRouter} from "react-router-dom";
import App from "../index.jsx";
import AddWork from "./AddWork";
import ViewWork from "./ViewWork";


//import Header from '../Header'; <Header/>

const Root = () => (
  <div>
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/view" component={ViewWork} />
        <Route path="/add" component={AddWork} />
      </Switch>
    </HashRouter>
  </div>
);

export default Root;
