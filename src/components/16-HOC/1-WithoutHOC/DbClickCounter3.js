import React, { Component } from "react";

class DbClickCounter3 extends Component {
  // Repetition of code
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increamentCounter = () => {
    this.setState((pre) => {
      return {
        count: pre.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <button
          className="bg-red-300 outline-gray-400 p-3 m-2"
          onDoubleClick={this.increamentCounter}
        >
          You clicked {this.state.count} times
        </button>
      </div>
    );
  }
}


export default DbClickCounter3