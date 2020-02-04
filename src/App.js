import React from 'react';
import './App.css';
import Card from './components/Card'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import money from './images/money.jfif'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Syncopate:700|Teko:400|Orbitron:400|Raleway:400');
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html,
body {
    position: relative;
    color: #474247;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.2;
    background: #f2f2f2;
    word-break: normal;
}

ul,li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.selected {
  color: #ff00ff;
}

.fade-enter {
  opacity: 0.01;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 100ms ease-in;
}
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0.01;
  transition: opacity 100ms ease-in;
}
.page-enter {
  opacity: 0.01;
}
.page-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}
.page-exit {
  opacity: 1;
}
.page-exit-active {
  opacity: 0.01;
  transition: opacity 500ms ease-in;
}

`

const Wrap = styled.div`
  position: relative;
`

const PageWrap = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 100px);
  background: url(${money}); no-repeat;
`

const Hero = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 60% 40%;
`

const HeroRight = styled.div`
  padding: 0 40px 0 0;
`

const App = () => {
  return(
    <Wrap>
      <Header />
      <GlobalStyle whiteColor />
      <PageWrap>
        <Hero> 
          <div>ssdsf</div>
          <HeroRight><Card /></HeroRight>
        </Hero>
      </PageWrap>
      <Footer />
    </Wrap>
  )
}

export default App
