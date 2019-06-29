import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Search from '../pages/Search';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/search' component={Search} exact/>
    </Switch>
  </BrowserRouter>
)

export default Router