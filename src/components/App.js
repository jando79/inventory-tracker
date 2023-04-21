import React from "react";
import Header from "./Header";
import CoffeeControl from "./CoffeeControl"

function App(){
  const myStyledComponentStyles = {
    backgroundColor: '#2C0D06',
    color: '#DFFF00',
    fontFamily: 'sans-serif',
    paddingTop: '60px',
    paddingBottom: '60px',
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