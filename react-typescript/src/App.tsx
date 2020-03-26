import React from 'react';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import Counter from './components/Counter';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import PortalDemo from './components/PortalDemo';
// import ErrorBoundary from './components/ErrorBoundary';
// import { ErrorEG } from './components/ErrorEg';
function App() {
  return (
    <div className="App">
      <Counter
        render={(count: any, incrementCount: any) => (
          <ClickCounterTwo name="pardhu" count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count: any, incrementCount: any) => (
          <HoverCounterTwo name="pardhu" count={count} incrementCount={incrementCount} />
        )}
      />
      {/* <ClickCounter name="pardhu" /> */}
      {/* <HoverCounter name="pardhu" /> */}
      {/* Hello World */}
      {/* <PortalDemo /> */}
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
