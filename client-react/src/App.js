import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';

import Navbar from './components/navbar/Navbar';
import TranslationMenu from './components/translationMenu/TranslationMenu';
import MediaDisplay from './components/mediaDisplay/MediaDisplay';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDarkMode: false,
      isLoggedIn: false 
    }
  }

  render() {
    const theme = this.state.isDarkMode ? darkTheme : lightTheme;
    const navbarHeight = "68px";
    const testImages = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Blocksatz-Beispiel_deutsch%2C_German_text_sample_with_fully_justified_text.svg/1200px-Blocksatz-Beispiel_deutsch%2C_German_text_sample_with_fully_justified_text.svg.png",
      "http://www.learnitaliandaily.com/en/wp-content/uploads/2014/08/texts-in-italian-benigni.png",
      "https://www.w3.org/TR/dpub-latinreq/images/HeadInText.png"
    ]

    return (
      <ThemeProvider theme={ theme }>
        <>
        <GlobalStyles />
          <div className="App">
            <Navbar isGuest={ !this.state.isLoggedIn } height={navbarHeight} />
            <TranslationMenu topPadding={navbarHeight} />
            <MediaDisplay topPadding={navbarHeight} media={testImages} />
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
