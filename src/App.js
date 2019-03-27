import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import Nav from './components/Nav';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero />
        <Posts />
      </div>
    );
  }
}

export default App;
