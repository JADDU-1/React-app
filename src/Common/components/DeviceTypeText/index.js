import React, { Component } from "react";
import withScreenSizeDetectors from "../../hocs/WithScreenSizeDetectors";
import { observer } from "mobx-react";
import { DisplayText, Heading } from "./styles";

@observer
class DeviceTypeText extends Component {
  render() {
    const { displaySize } = this.props;
    return (
      <DisplayText>
        <Heading>DeviceTypeText</Heading>
        <p>Device Type: {displaySize}</p>
      </DisplayText>
    );
  }
}

export default withScreenSizeDetectors(DeviceTypeText);
