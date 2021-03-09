import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDarkMode: false
    }
  }

  render() {
    const theme = this.state.isDarkMode ? darkTheme : lightTheme;

    return (
      <ThemeProvider theme={ theme }>
        <>
        <GlobalStyles />
          <div className="App">
            <h1>Hello World</h1>
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
