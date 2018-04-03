import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import modules/routes
import LS1 from './lessons/lesson1';

export default (
  <Switch>
    <Route exact path="/hans/lesson1" component={LS1}/>
  </Switch>
);