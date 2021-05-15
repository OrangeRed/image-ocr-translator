import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { constants, lightTheme, darkTheme } from './styles/Themes';
import { ScreenCapture } from 'react-screen-capture';
import { FaCropAlt, FaSpinner, FaCog, FaSearch } from 'react-icons/fa'
import Navbar from './components/navbar/Navbar';
import TranslationMenu from './components/translationMenu/TranslationMenu';
import MediaDisplay from './components/mediaDisplay/MediaDisplay';
import Button from './components/button/Button'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isMobile: false,
      isDarkMode: true,
      isLoggedIn: false,
      sourceText: '',
      testImages: [
      //   "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Blocksatz-Beispiel_deutsch%2C_German_text_sample_with_fully_justified_text.svg/1200px-Blocksatz-Beispiel_deutsch%2C_German_text_sample_with_fully_justified_text.svg.png",
      // "http://www.learnitaliandaily.com/en/wp-content/uploads/2014/08/texts-in-italian-benigni.png",
      // "https://www.w3.org/TR/dpub-latinreq/images/HeadInText.png",
        './texts-in-italian-benigni.png',
        './HeadInText.png'
      ]
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

  handleSettingsButton = (event) => {
    console.log("Settings clicked")
  }

  handleScreenCapture = (screenCapture) => {
    this.setState({ capturedImg: screenCapture });
    // fetch('http://localhost:5000/ocr/',
    // {
    //   data: screenCapture,
    // })
    // .then()
  };

  renderSnipButton = (onStartCapture) => {
    return <Button Icon={FaCropAlt} title='Snip' onClick={onStartCapture} />
  }

  renderLoadButton = (event) => {
    return <Button Icon={FaSpinner} title='Load' for='imgFile' onClick={(event) => {
      const imgInput = document.createElement("input");
      imgInput.setAttribute('type', 'file');
      imgInput.setAttribute('accept', 'image/png, image/jpeg');
      imgInput.setAttribute('className', 'img-input');

      imgInput.addEventListener('change', (event) => {
        // const userImg = URL.createObjectURL(imgInput.files[0]);
        const formData = new FormData()
        formData.append('myFile', event.target.files[0])

        fetch('http://localhost:5000/api/upload', {
          method: 'post',
          body: formData,
        })
        .then( res => console.log(res.json()) );  

        // this.setState({ testImages: [...this.state.testImages, userImg] });

      })
      imgInput.click();

      // Ask the prof on Saturday
      // This element does not appear on the DOM so do we have to kill it after we're done using it?
      //
      // How can we move userImg to ./public so that it can be captured using canvas2html
      // At the moment canvas2html does not register uploaded picture because they are cross-domain

    }} 
    />
  }

  handleSearchRequest = () => {
    //
    // Make fetch request to translate API over here
    //
    console.log(this.state.sourceText);
  }

  trackSearchText = (text) => {
    this.setState({ sourceText: text })
  }

  render() {
    const theme = this.state.isDarkMode ? darkTheme : lightTheme

    const settingsButton = <Button Icon={FaCog} title='Settings' onClick={this.handleSettingsButton} key={2} />
    const settingsMobileButton = <Button Icon={FaCog} onClick={this.handleSettingsButton} key={2} />
    const searchButton = <Button Icon={FaSearch} title='' onClick={this.handleSearchRequest} />

    return (
      <ThemeProvider theme={theme} >
        <>
        <GlobalStyles />
        <ScreenCapture onEndCapture={this.handleScreenCapture} >
          {({ onStartCapture }) => (
            <div className="App" onMouseMove={this.trackMouse}>
              <Navbar 
                  loggedIn={this.state.isLoggedIn} 
                  Buttons={
                    this.state.isMobile ? [settingsMobileButton] : [this.renderSnipButton(onStartCapture), this.renderLoadButton(), settingsButton]
                  }   
              />
              <TranslationMenu 
                media={this.state.capturedImg}
                Buttons={this.state.isMobile ? [this.renderSnipButton(onStartCapture), this.renderLoadButton()] : ''}
                searchButton={searchButton}
                trackSearchText={this.trackSearchText}
                sourceText={this.state.sourceText}
              />
              <MediaDisplay
                media={this.state.testImages} 
              />
            
            </div>
          )}
        </ScreenCapture>
        </>
      </ThemeProvider>
    );
  }
}

export default App
