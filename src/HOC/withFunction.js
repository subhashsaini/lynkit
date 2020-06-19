import React from "react";
import { Component } from "react";

const withFunction = (PreviousComponent) => {
  return class NewComponent extends Component {
    state = {
      count: 0,
    };
    handleMyClick = () => this.setState({ count: this.state.count + 1 });

    render() {
      return (
        <PreviousComponent
          {...this.props}
          count={this.state.count}
          newClick={this.handleMyClick}
        />
      );
    }
  };
};

export { withFunction };
