import React from 'react';
import Coutner from './components/Counter';
import Todos from './components/Todos';

const App = () => {
  return (
    <div>
      <Coutner number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
