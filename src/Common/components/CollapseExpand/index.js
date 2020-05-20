import React, { Component } from "react";
import { observer } from "mobx-react";
import withToggle from "../../hocs/WithToggle";
import { CollapseView } from "./styles";
import { Button, Heading, List, Collapse } from "./styles";

@observer
class CollapseExpand extends Component {
  render() {
    const { onToggle, toggleStatus } = this.props;
    return (
      <CollapseView>
        <Heading>CollapseExpand</Heading>
        <Collapse>
          <span>Sample Shopping List:</span>
          <Button onClick={onToggle}>
            {toggleStatus ? "Collapse" : "Expand"}
          </Button>
          <List>
            {toggleStatus ? (
              <div>
                <p>Eggs</p>
                <p>Bread</p>
              </div>
            ) : (
              ""
            )}
          </List>
        </Collapse>
      </CollapseView>
    );
  }
}

export default withToggle(CollapseExpand);
