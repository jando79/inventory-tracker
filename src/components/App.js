import React from "react";
import Header from "./Header";
import CoffeeControl from "./CoffeeControl"

function App(){
  const myStyledComponentStyles = {
    background: 'linear-gradient(63deg, #999 23%, transparent 23%) 7px 0, linear-gradient(63deg, transparent 74%, #999 78%), linear-gradient(63deg, transparent 34%, #999 38%, #999 58%, transparent 62%), #444',
    backgroundSize: '16px 48px',
    backgroundColor: '#C4A484',
    color: '#DFFF00',
    fontFamily: 'sans-serif',
    paddingTop: '5px',
    paddingBottom: '100px',
    textAlign: 'center',
  }
  return (
    <React.Fragment>
      <div style={myStyledComponentStyles}>
        <Header />
        <CoffeeControl />
      </div>
    </React.Fragment>
  );
}

export default App;