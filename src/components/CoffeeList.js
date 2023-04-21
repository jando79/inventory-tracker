import React from "react";
import Wine from "./Coffee";
import PropTypes from "prop-types";

export default function CoffeeList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((item) => 
        <Wine 
        whenCoffeeClicked = {props.onCoffeeSelection}
        coffee={item.coffee}
        origin={item.origin}
        roast={item.roast}
        price={item.price}
        quantity={item.quantity}
        id={item.id}
        key={item.id}/>
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
}