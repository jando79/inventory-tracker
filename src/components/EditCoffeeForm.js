import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm (props) {
  const { coffeeObject } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      coffee: event.target.coffee.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      quantity: coffeeObject.quantity,
      id: coffeeObject.id
    })
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Coffee" />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffeeObject: PropTypes.object,
  onEditCoffee: PropTypes.func
}

export default EditCoffeeForm;