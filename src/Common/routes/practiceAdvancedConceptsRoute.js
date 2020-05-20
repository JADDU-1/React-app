import React, { Component } from "react";
import ViewEditToggle from "../components/ViewEditToggle";
import DeviceTypeText from "../components/DeviceTypeText";
import CollapseExpand from "../components/CollapseExpand";
import DisplayMouseCoordinates from "../components/DisplayMouseCoordinates";
import { Heading, Wrapper, MouseHover } from "./styles";
import MouseCoordinates from "../components/MouseCoordinates";

class PracticeAdvancedConceptsRoute extends Component {
  render() {
    return (
      <Wrapper>
        <Heading>HOC's Usage</Heading>
        <ViewEditToggle />
        <CollapseExpand />
        <DeviceTypeText />
        <Heading>Render Props Usage</Heading>
        <MouseHover>
          <MouseCoordinates
            render={(xCooradinate, yCooradinate, handleMouseMove) => (
              <DisplayMouseCoordinates
                xCooradinate={xCooradinate}
                yCooradinate={xCooradinate}
                handleMouseMove={handleMouseMove}
              />
            )}
          />
        </MouseHover>
      </Wrapper>
    );
  }
}

export { PracticeAdvancedConceptsRoute };
