import React from "react";
import "./App.css";
import SwitchHook from "./SwitchHook";

class App extends React.Component {
  componentDidMount() {
    setInterval(() => {
      this.getTime();
    });
  }
  dateDisplay = false;
  constructor() {
    super();
    this.state = {
      time: "00:00:00:AM",
      date: "",
    };
  }
  getDate() {
    var date = { currentTime: new Date() };

    this.setState({
      date: date.currentTime.toDateString(),
    });
  }

  enableDate(value) {
    this.dateDisplay = value;
    console.log(this.dateDisplay);
    if (this.dateDisplay) {
      this.getDate();
    }
  }
  getTime() {
    setInterval(() => {
      let date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let seconds = date.getSeconds();
      let ampm = this.hour >= 12 ? "PM" : "AM";
      hour = hour % 12;
      hour = hour ? hour : 12;
      hour = fullTime(hour);
      minute = fullTime(minute);
      seconds = fullTime(seconds);
      this.setState({
        time: hour + ":" + minute + ":" + seconds + " " + ampm,
      });

      function fullTime(n) {
        return n < 10 ? "0" + n : n;
      }
    }, 1000);
  }
  render() {
    let dateUi = null;
    if (this.dateDisplay) {
      dateUi = <h3>{this.state.date}</h3>;
    }
    return (
      <div className="container">
        <div className="switch-container">
          <SwitchHook dateEnabled={(value) => this.enableDate(value)} />
        </div>
        <div className="outer-circle">
          <div className="inner-circle">
            <div class="inner-text">
              <h1>{this.state.time} </h1>
              {dateUi}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
