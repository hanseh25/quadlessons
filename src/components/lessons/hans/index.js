import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from './routes';
import './styles.css';

class Hans extends Component {
  render() {
    return (
      <div>
        <Container>
          <h2 className="text-center hans1">Hans</h2>
          <Link to="/hans/lesson1">Lesson 1</Link>
          <Link to="/hans/lesson2">Lesson 2</Link>
          {routes}
        </Container>
      </div>
    );
  }
}

export default Hans;
