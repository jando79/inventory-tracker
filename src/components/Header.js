import React from "react";
import CoffeeBags from '../img/CoffeeBags.jpg';

function Header() {
  return (
    <React.Fragment>
      <h1 style={{textAlign: "center"}}>Why Not Coffee?</h1>
      <img src={CoffeeBags} alt='burlap bags of coffee' />
    </React.Fragment>
  );
}

export default Header;