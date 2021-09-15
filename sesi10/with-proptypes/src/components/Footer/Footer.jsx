import { Component } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { copyright, comp } = this.props;

    return (
      <footer className="footer">
        <p className="footer__text">
          © {copyright || "unknown"} - {new Date().getFullYear()}
        </p>

        {comp}
      </footer>
    );
  }
}

Footer.propTypes = {
  copyright: PropTypes.string,
  comp: PropTypes.node,
};

export default Footer;
