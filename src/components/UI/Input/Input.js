import React from "react";
import classes from "./Input.scss";

const Input = props => {
  let cssClasses = "input";
  if (props.touched && props.invalid && props.shouldValidate) {
    cssClasses = "error";
  }

  let inputElement = null;

  switch (props.elementType) {
    case "textarea":
      inputElement = (
        <textarea
          rows="10"
          cols="50"
          className={cssClasses}
          value={props.value}
          onChange={props.changed}
          {...props.elementConfig}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={cssClasses}
          value={props.value}
          onChange={props.changed}
          {...props.elementConfig}
        />
      );
  }
  return <div>{inputElement}</div>;
};

export default Input;
