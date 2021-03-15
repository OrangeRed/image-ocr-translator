import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { constants, lightTheme, darkTheme } from './styles/Themes';
import Navbar from './components/navbar/Navbar';
import TranslationMenu from './components/translationMenu/TranslationMenu';
import MediaDisplay from './components/mediaDisplay/MediaDisplay';
import Button from './components/button/Button'
import { FaCropAlt, FaSpinner, FaCog } from 'react-icons/fa'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isMobile: false,
      isDarkMode: true,
      isLoggedIn: false 
    }
  }

  componentDidMount() {
    this.updateWidth()
    window.addEventListener("resize", this.updateWidth)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth)
  }

  updateWidth = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0
    let isMobile = windowWidth < constants.mobileWidth
    let menuOpen = isMobile ? this.state.menuOpen : false
    this.setState({ isMobile, menuOpen })
  }

  handleSnipButton = (event) => {
    console.log("Snip clicked")
  }

  handleLoadButton = (event) => {
    console.log("Load clicked")
  }

  handleSettingsButton = (event) => {
    console.log("Settings clicked")
  }

  render() {
    const theme = this.state.isDarkMode ? darkTheme : lightTheme
    const testImages = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Blocksatz-Beispiel_deutsch%2C_German_text_sample_with_fully_justified_text.svg/1200px-Blocksatz-Beispiel_deutsch%2C_German_text_sample_with_fully_justified_text.svg.png",
      "http://www.learnitaliandaily.com/en/wp-content/uploads/2014/08/texts-in-italian-benigni.png",
      "https://www.w3.org/TR/dpub-latinreq/images/HeadInText.png"
    ]

    const snipButton = <Button Icon={FaCropAlt} title='Snip' onClick={this.handleSnipButton} key={0} />
    const loadButton = <Button Icon={FaSpinner} title='Load' onClick={this.handleLoadButton} key={1} />
    const settingsButton = <Button Icon={FaCog} title='Settings' onClick={this.handleSettingsButton} key={2} />
    const settingsMobileButton = <Button Icon={FaCog} onClick={this.handleSettingsButton} key={2} />

    return (
      <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div className="App">
            <Navbar 
              loggedIn={this.state.isLoggedIn} 
              Buttons={this.state.isMobile ? [settingsMobileButton] : [snipButton, loadButton, settingsButton]}   
            />
            <TranslationMenu Buttons={this.state.isMobile ? [snipButton, loadButton] : ''}/>
            <MediaDisplay media={testImages} />
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App
