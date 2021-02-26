import React, { Component } from 'react';
import NavBar from './NavBar';
import TabBar from './TabBar';
import Content from './Content';
import Footer from './Footer';
import '../css/App.css';

class App extends Component {
  render () {
    return (
    <div className='app'>
      <NavBar></NavBar>
      <main>
      <TabBar></TabBar>
      <Content></Content>
      </main>
      <Footer></Footer>
    </div>
    )
  }
}

export default App;
