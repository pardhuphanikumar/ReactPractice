import React from 'react';
import './App.css';
//we can give our own import name if it is default export component
//functional component
import FunComp from './components/FunctionalComponent/Greet';
import ClsComp from './components/ClassComponents/Welcome';
import Counter from './components/setState/Counter';
import UserGreetings from './components/ContitionalRendering/UserGreetings';
import UserGreetings1 from './components/ContitionalRendering/UserGreetings1';
import UserGreetings2 from './components/ContitionalRendering/UserGreetings2';

function App() {
  return (
    <div className="App">
      <UserGreetings2 />
      <UserGreetings1 />
      <UserGreetings />
      <Counter />
      <FunComp />
      <ClsComp />
    </div>
  );
}

export default App;
