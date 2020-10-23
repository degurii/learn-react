import React from 'react';
import Todos from './containers/Todos';
import Counter from './containers/Counter';

const App = () => {
  return (
    <div>
      <Counter />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
