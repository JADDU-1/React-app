import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import withToggle from "../../hocs/WithToggle/index";
import { ViewToggle, Heading, Input, Button } from "./styles";

@observer
class ViewEditToggle extends Component {
  @observable text = "Click on the edit button to start editing";

  @action.bound
  onChange(event) {
    this.text = event.target.value;
  }

  render() {
    const { onToggle, toggleStatus } = this.props;
    return (
      <ViewToggle>
        <Heading>ViewEditToggle</Heading>
        <div>
          {toggleStatus ? (
            <Input
              type="text"
              defaultValue={this.text}
              onChange={this.onChange}
            ></Input>
          ) : (
            <span>{this.text}</span>
          )}
          <Button onClick={onToggle}>{toggleStatus ? "Cancel" : "Edit"}</Button>
        </div>
      </ViewToggle>
    );
  }
}

export default withToggle(ViewEditToggle);
