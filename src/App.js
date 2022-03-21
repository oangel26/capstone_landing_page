import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Intro from './sections/Intro';
import Feature from './sections/Feature';
import About from  './sections/About';

function App() {
  return (
    <Fragment>
      <Intro></Intro>
      <Feature></Feature>
      <About></About>
    </Fragment>
  );
}

export default App;
