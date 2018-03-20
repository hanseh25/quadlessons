import React from 'react';
import { Route, Switch } from 'react-router';

// Import modules/routes
import Home from './components/home';
import Don from './components/lessons/don';
import Ivy from './components/lessons/ivy';
import James from './components/lessons/james';
import PageNotFound from './common/not-found';

export default (
  <Switch>

    <Route exact path="/" component={Home}/>
    <Route path="/don" component={Don}/>
    <Route path="/ivy" component={Ivy}/>
    <Route path="/james" component={James}/>
    <Route path="*" component={PageNotFound} />

  </Switch>
);