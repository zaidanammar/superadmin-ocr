import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';

import "@fortawesome/fontawesome-free/css/all.min.css";

import SuperAdminLayout from './layout/SuperAdminLayout';
// import Auth from './layouts/Auth';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/superadmin" component={SuperAdminLayout} />
      {/* <Route path="/auth" component={Auth} /> */}
      <Redirect from="*" to="/superadmin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
