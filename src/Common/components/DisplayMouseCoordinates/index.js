import React, { Component } from "react";
import MouseCoordinates from "../MouseCoordinates";
import { MouseHover, Heading } from "./styles";

class DisplayMouseCoordinates extends Component {
  render() {
    const { xCooradinate, yCooradinate, handleMouseMove } = this.props;
    return (
      <MouseHover>
        <Heading>DisplayMouseCoordinates</Heading>
        <p onMouseMove={handleMouseMove}>
          The mouse position is ({xCooradinate}, {yCooradinate})
        </p>
      </MouseHover>
    );
  }
}

export default DisplayMouseCoordinates;
