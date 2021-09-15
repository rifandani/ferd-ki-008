import { Component } from "react";
import "./DefaultContainer.css";

class DefaultContainer extends Component {
  render() {
    const { children } = this.props;

    return <div className="default-container">{children}</div>;
  }
}

export default DefaultContainer;
