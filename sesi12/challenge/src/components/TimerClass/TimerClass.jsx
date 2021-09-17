import React, { Component } from "react";
import "./TimerClass.css";

export default class TimerClass extends Component {
  constructor() {
    super();
    this.state = {
      clock: new Date(),
    };
  }

  componentDidMount() {
    this.timerClockId = setInterval(() => {
      this.setState({ clock: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerClockId);
  }

  render() {
    return (
      <div className="timerclass">
        <h6 className="timerclass__title">Realtime Clock (class-based)</h6>

        <hr className="separator" />

        <p className="timerclass__clock">
          {new Intl.DateTimeFormat("id-ID", {
            dateStyle: "full",
            timeStyle: "long",
          }).format(this.state.clock)}
        </p>
      </div>
    );
  }
}
