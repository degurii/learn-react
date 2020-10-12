import React, { useContext } from 'react';
import ColorContext from '../contexts/color';
// import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
        }}
      />
    </>
  );

  // 아래는 useContext사용 안하는 경우
  //  return (
  //   <ColorConsumer>
  //     {value => (
  //       <>
  //         <div
  //           style={{
  //             width: '64px',
  //             height: '64px',
  //             background: value.state.color,
  //           }}
  //         />
  //         <div
  //           style={{
  //             width: '32px',
  //             height: '32px',
  //             background: value.state.subcolor,
  //           }}
  //         />
  //       </>
  //     )}
  //   </ColorConsumer>
  // );
};

export default ColorBox;
