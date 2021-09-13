import { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    this.setState({
      count: this.props.count || 0,
    });
  }

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  decrement = () => {
    this.setState((state) => ({
      count: state.count - 1,
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
};

export default Counter;
