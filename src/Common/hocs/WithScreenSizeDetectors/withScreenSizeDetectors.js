import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
export function withScreenSizeDetectors(WrappedComponent) {
  @observer
  class SizeComponent extends Component {
    @observable displaySize = "";
    componentDidMount() {
      this.resizeScreen();
      window.addEventListener("resize", this.resizeScreen);
    }
    @action.bound
    isMobile() {
      return window.innerWidth < 576;
    }
    @action.bound
    isTablet() {
      return window.innerWidth >= 576 && window.innerWidth < 992;
    }
    @action.bound
    isDesktop() {
      return window.innerWidth >= 992;
    }
    @action.bound
    resizeScreen() {
      this.displaySize = this.isMobile()
        ? "Mobile"
        : this.isTablet()
        ? "Tablet"
        : "Desktop";
    }
    render() {
      const { displaySize } = this;
      return <WrappedComponent displaySize={displaySize} />;
    }
  }
  return SizeComponent;
}
