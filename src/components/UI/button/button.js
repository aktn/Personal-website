import React from "react";
import "./button.scss";

const button = props => (
  <button className="button" disabled={props.disabled} onClick={props.clicked}>
    {props.children}
  </button>
);

export default button;
