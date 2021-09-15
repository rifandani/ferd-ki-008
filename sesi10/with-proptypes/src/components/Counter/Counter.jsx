import { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      crementValue: 1,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    this.setState({
      count: this.props.count || 0,
      crementValue: this.props.crementValue || 1,
    });
  }

  increment = () => {
    this.setState((state) => ({
      count: state.count + state.crementValue,
    }));
  };
  decrement = () => {
    this.setState((state) => ({
      count: state.count - state.crementValue,
    }));
  };

  render() {
    return (
      <section className="counter">
        <p className="counter__value">Count: {this.state.count}</p>

        <div className="counter__inputs">
          <button onClick={this.increment}> Increment </button>
          <button onClick={this.decrement}> Decrement </button>
        </div>
      </section>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  crementValue: PropTypes.number,
};

export default Counter;
