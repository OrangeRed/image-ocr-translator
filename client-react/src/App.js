import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';

import TopNavBar from './components/topNavBar/TopNavBar';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDarkMode: false
    }
  }

  handleUpload = (text) => {
    console.log(text);
  }

  render() {
    const theme = this.state.isDarkMode ? darkTheme : lightTheme;

    return (
      <ThemeProvider theme={ theme }>
        <>
        <GlobalStyles />
          <div className="App">
            <TopNavBar />
            <div className="filler"></div>
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
