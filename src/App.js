import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import { Fragment } from 'react';
import Intro from './sections/Intro';
import Feature from './sections/Feature';
import About from  './sections/About';

const Footer = styled.footer`
  display: flex;
  background-color: #00171F;
  color: white;
  justify-content: center;
  height: 10vh;
  align-items: center;
  box-sizing: border-box;
`;
function App() {
  return (
    <Fragment>
      <Intro></Intro>
      <Feature></Feature>
      <About></About>
      <Footer>Developed by Three Little Devs Software</Footer>
    </Fragment>
  );
}

export default App;
