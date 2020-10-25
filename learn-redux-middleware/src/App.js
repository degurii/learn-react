import React from 'react';
import SampleContainer from './containers/SampleContainer';
import CounterContainer from './containers/CounterConatiner';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <SampleContainer />
    </div>
  );
};

export default App;
