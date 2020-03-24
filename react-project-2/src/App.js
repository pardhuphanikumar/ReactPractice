import React from 'react';
import './App.css';
//we can give our own import name if it is default export component
//functional component
import FunComp from './components/FunctionalComponent/Greet';
import ClsComp from './components/ClassComponents/Welcome';

function App() {
  return (
    <div className="App">
      <FunComp />
      <ClsComp />
    </div>
  );
}

export default App;
