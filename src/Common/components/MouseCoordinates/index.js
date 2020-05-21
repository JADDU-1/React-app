import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
//import { MouseHover, Heading } from "./styles";

@observer
class MouseCoordinates extends Component {
  @observable xCooradinate = 0;
  @observable yCooradinate = 0;

  @action.bound
  handleMouseMove(event) {
    this.xCooradinate = event.clientX;
    this.yCooradinate = event.clientY;
  }
  render() {
    const { xCooradinate, yCooradinate, handleMouseMove } = this;
    return (
      <div>
        {this.props.render(xCooradinate, yCooradinate, handleMouseMove)}
      </div>
    );
  }
}

export default MouseCoordinates;

{
  /* <MouseHover>
        <Heading>DisplayMouseCoordinates</Heading>
        <p onMouseMove={this.handleMouseMove}>
          The mouse position is ({xCooradinate}, {yCooradinate})
        </p>
      </MouseHover> */
}
