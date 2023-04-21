import React from "react";
import PropTypes from "prop-types";

export default function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {()=>props.whenCoffeeClicked(props.id)}>
      <h3>Coffee: {props.wine}</h3>
      <h4>Origin: {props.origin}</h4>
      {/* <h4>roast: {props.roast}</h4>
      <h4>Price: ${props.price}</h4> */}
      <h5>Quantity: {props.quantity }lbs</h5>
      <hr />
      </div>
    </React.Fragment>
  )
}

Coffee.propTypes = {
  coffee: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
}