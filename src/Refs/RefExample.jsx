import React, { Component } from "react";

let inputRef = React.createRef();

class RefExample extends Component {
  render() {
    return (
      <>
        <input
          type="text"
          ref={inputRef}
          onChange={() => console.log(inputRef.current.value)}
          placeholder="check in console"
        />
      </>
    );
  }
}

export { RefExample };
