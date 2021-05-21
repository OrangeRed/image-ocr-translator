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
      ocrResult: null,
      sourceText: '',
      responseText: [],
      testImages: [],
        // './texts-in-italian-benigni.png',
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

    fetch('http://localhost:5000/api/ocr', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ 'image': this.state.capturedImg }),
        })
        .then( res => res.json())
        .then( data => {
          this.setState({ ocrResult: '' })
          console.log(data)
          let regions = data.ocrData.regions
          regions.forEach(region => {
            let lines = region.lines
            lines.forEach(line => {
              let words = line.words
              words.forEach(word => {
                this.setState({ ocrResult: this.state.ocrResult + word.text + ' '})
              }) 
            })
          })
          console.log(this.state.ocrResult)
        })
        .catch( err => console.log(err))
  };

  renderSnipButton = (onStartCapture) => {
    return <Button Icon={FaCropAlt} title='Snip' onClick={onStartCapture} />
  }

  renderLoadButton = (event) => {
    return <Button Icon={FaSpinner} title='Load' onClick={(event) => {
      const imgInput = document.createElement("input");
      imgInput.setAttribute('type', 'file');
      imgInput.setAttribute('accept', 'image/png, image/jpeg');
      imgInput.setAttribute('className', 'img-input');

      imgInput.addEventListener('change', (event) => {
        const formData = new FormData()
        formData.append("image", event.target.files[0])

        fetch('http://localhost:5000/api/upload', {
          method: 'post',
          body: formData
        })
        .then( res => res.json())
        .then( data => this.setState({ testImages: [...this.state.testImages, `./img/image-${data.seed}.${data.ext}`] }))  
      }) 
      imgInput.click();
    }}
    />
  }

  handleSearchRequest = () => {
    const url="http://localhost:5000";
    const endpoint="api";
    const cmd="translate";
    const svc=["google", "myMemory"];
    const src="es";
    const tgt="en";
    const data = this.state.sourceText;
    if(data === ""){
      return
    }
    this.setState({ responseText: [] });
    svc.forEach( service => {
      fetch(`${url}/${endpoint}/${cmd}/${service}/${src}/${tgt}/${data}`)
        .then( response => response.json())
        .then( text => {
          this.setState({ responseText: [...this.state.responseText, text] });
        });
    })
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
        <ScreenCapture onEndCapture={this.handleScreenCapture}>
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
                ocrResult={this.state.ocrResult}
                searchButton={searchButton}
                trackSearchText={this.trackSearchText}
                sourceText={this.state.sourceText}
                responseText={this.state.responseText}
              />
              <MediaDisplay
                media={this.state.testImages.length !== 0 ? this.state.testImages : ['./test-img.jpg']} 
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
