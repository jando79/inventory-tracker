import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      coffee: event.target.coffee.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      value,
      quantity: 130,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewCoffeeFormSubmission}
      buttonText="Add Coffee to Inventory" />
      <hr />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
}

export default NewCoffeeForm;