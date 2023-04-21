import React from "react";
import CoffeeBags from '../img/CoffeeBags.jpg';

function Header() {

  return (
    <React.Fragment>
        <h1 style={{ textAlign: "center", fontSize: "50px" }}>Why Not Coffee?</h1>
        <center><img src={CoffeeBags} style= {{ width: 350, height: 350, paddingBottom: '10px' }} alt='burlap bags of coffee' /></center>
    </React.Fragment>
  );
}

export default Header;