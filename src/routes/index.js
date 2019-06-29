import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Search from '../pages/Search';
import MyList from '../pages/MyList';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/search' component={Search} exact/>
      <Route path='/mylist' component={MyList} exact/>
    </Switch>
  </BrowserRouter>
)

export default Router