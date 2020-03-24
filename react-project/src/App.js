import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftMenu from './components/LeftMenu';
import Content from './components/Content';

function App() {
  const divStyle = {
    margin: '40px',
    padding: '50px',
    border: '5px solid pink',
    display: 'flex'
  };

  return (
    <div className="App">
      <Header />
      <div style={divStyle}>
        <LeftMenu />
        <Content />
      </div>
      <Footer />
    </div >
  );
}

export default App;