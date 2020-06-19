import React from "react";
import "../style.css";
import { withFunction, MyComponent } from "../HOC";
import { RefExample } from "../Refs";

function Home(props) {
  const HandledComponent = withFunction(MyComponent);

  return (
    <>
      <h1>Home!</h1>
      <h2>Welcome, {props.username}</h2>

      <div className="myblock">
        <h4 style={{ margin: "0px" }}>HOC</h4>
        <HandledComponent />
      </div>
      
      <div className="myblock">
        <h4 style={{ margin: "0px" }}>Ref Example</h4>
        <RefExample />
      </div>
    </>
  );
}

export { Home };
