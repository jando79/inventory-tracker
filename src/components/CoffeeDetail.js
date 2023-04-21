import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffeeObject, onClickingDelete, onClickingEdit, sell } = props;

  return (
    <React.Fragment>
      <h1><u>Coffee Details</u></h1>
      <h2>Coffee: {coffeeObject.coffee}</h2>
      <h3>Origin: {coffeeObject.origin}</h3>
      <h3>Roast: {coffeeObject.roast}</h3>
      <h4>Price: ${coffeeObject.price}</h4>
      <h4>Quantity: {coffeeObject.quantity} lbs</h4>
      <button onClick={()=>onClickingEdit(coffeeObject.id)}>Update Coffee</button>
      <button onClick={()=>onClickingDelete(coffeeObject.id)}>Remove from Inventory</button>
      <button onClick={()=>sell(coffeeObject)}>Sell Coffee</button>
      <hr />
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffeeObject: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  sell: PropTypes.func
}

export default CoffeeDetail;
