import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
  <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='coffee'
          placeholder='Coffee' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        
    </form>
  </React.Fragment>
  );
}