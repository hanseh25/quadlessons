import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './common/components/header'
import Footer from './common/components/footer'


import routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="wrap">
            {routes}
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
