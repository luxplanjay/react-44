import { Component } from 'react';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  render() {
    return (
      <>
        <Box as="main" px={4}>
          App
        </Box>
        <GlobalStyle />
      </>
    );
  }
}
