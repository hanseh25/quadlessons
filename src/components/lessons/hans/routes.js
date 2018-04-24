import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import modules/routes
import LS1 from './lessons/lesson1';
import LS2 from './lessons/lesson2';
import LS3 from './lessons/Lesson3';

export default (
  <Switch>
    <Route exact path="/hans/lesson1" component={LS1}/>
    <Route exact path="/hans/lesson2" component={LS2}/>
    <Route exact path="/hans/lesson3" component={LS3}/>
  </Switch>
);