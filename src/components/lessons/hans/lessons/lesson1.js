import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import styled, { ThemeProvider } from 'styled-components';
import colors from './color';
import colors2 from './color2';

class LS1 extends Component {
  constructor(props) {
    super(props);
    this.state = {theme: colors};
  }

  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: ${props => props.theme.light};
    `;

    return (
      <div>
        <ThemeProvider theme={this.state.theme} >
          <Container>
            <Title> This is lesson 01</Title>
            <Button onClick={ () => this.state.theme == colors ? this.setState({ theme: colors2 }) : this.setState({ theme: colors }) }>Cycle</Button>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

export default LS1;
