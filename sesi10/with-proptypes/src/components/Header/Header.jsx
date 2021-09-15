import { Component } from "react";
import PropTypes from "prop-types";
import "./Header.css";

class Header extends Component {
  render() {
    const { title } = this.props;

    return (
      <header className="header">
        <p className="header__title">{title || "My App"}</p>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
