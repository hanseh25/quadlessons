import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import styled, { ThemeProvider } from 'styled-components';
import colors from './color';
import colors2 from './color2';

class LS1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: colors,
      textTheme: 'dark'
    };
  }

  handleTextbox(e) {
    e.target.value == 'dark' ? this.setState({
        theme: colors,
        textTheme: e.target.value
      }):this.setState({textTheme : e.target.value});

    e.target.value == 'light' ? this.setState({
        theme: colors2,
        textTheme: e.target.value
      }):this.setState({textTheme : e.target.value});
  }

  render() {
    const Title = styled.h1`
      
      -size: 1.5em;
      text-align: center;
      color: ${props => props.theme.light};
    `;

    const TextTitle = styled.h1`
      
      -size: 1.5em;
      text-align: center;
      color: ${props => props.theme.light};
    `;

    return (
      <div>
        <ThemeProvider theme={this.state.theme} >
          <Container>
            <Title> Button</Title>
            <Button onClick={ () => this.state.theme == colors ? this.setState({ theme: colors2 }) : this.setState({ theme: colors }) }>CYCLE</Button>

            <br /><br />
            <input type="text" value={this.state.textTheme} onChange={this.handleTextbox.bind(this)}
            />
            <TextTitle>TextBox</TextTitle>

            <br /><br />
            <select onChange={this.handleTextbox.bind(this)}>
              <option value="dark">dark</option>
              <option value="light">light</option>
            </select>
            <TextTitle>TextBox</TextTitle>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

export default LS1;
