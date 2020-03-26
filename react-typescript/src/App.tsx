import React from 'react';
import './App.css';
import PortalDemo from './components/PortalDemo';
// import ErrorBoundary from './components/ErrorBoundary';
// import { ErrorEG } from './components/ErrorEg';
function App() {
  return (
    <div className="App">
      {/* Hello World */}
      <PortalDemo />
      {/* <ErrorBoundary>
        <ErrorEG name="pard">
        </ErrorEG>
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorEG name="pardhu">
        </ErrorEG>
      </ErrorBoundary> */}
    </div>

  );
}
export default App;
