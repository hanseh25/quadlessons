import React, { Component } from 'react';
import { Container, Button, Card } from 'reactstrap';
const formTestUrl = '//httpbin.org/get';

class LS3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div>
            <div>
              <h1> do it here</h1>
          <iframe
            src=""
            title="Checkbox Resopnse Frame"
            id="submitFrame"
            name="submitFrame"
            style={{
              width: '95%',
              height: '300px',
              borderStyle: 'dashed',
              borderWidth: '1px',
              borderColor: '#ccc',
              padding: '0.5em',
              color: '#ccc',
              margin: '0.5em',
            }}
          />
        </div>
      </div>
    );
  }
}

export default LS3;
