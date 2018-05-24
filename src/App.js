import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <div className="has-background-warning is-absolute w-100 minHeight-100 maxWidth-100">
        <Header />
        <Route exact={ true } path="/" component={ Home } />
        <Route path="/nosotros" component={ About } />
        <Footer />
      </div>
    );
  }
}

export default App;
