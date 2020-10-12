import React from 'react';
import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColors';
import { ColorProvider } from './contexts/color';

const App = () => {
  return (
    <ColorProvider>
      <div style={{ marginLeft: '10px' }}>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
