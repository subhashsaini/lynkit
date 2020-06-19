import React from "react";
import { Component } from "react";

function MyComponent(props) {
  return (
    <>
      <h4 style={{ margin: "0px" }}>{props.count}</h4>
      <input
        className="showButton"
        type="button"
        value="Count"
        onClick={props.newClick}
      />
    </>
  );
}

export { MyComponent };
