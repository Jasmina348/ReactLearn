//how components make the fuction reusable and helps in rendering 
//State is similar to props but it is private and fully controlled by the components
//Class based components helps the clock component to handle the timer itself by creating the constructor and setting the initial state 
// and lifecycle of mounting helps to update this timer after the component render the initial state
//the top-down approach of the components
//independentability of the components of the react

import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() }

  }
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  tick() {
    this.setState(
      { date: new Date() }
    );
  }

  render() {
    return (
      <div>
        <h1>The timer is given below</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function State() {
  return (
    <Clock />
  )
}
export default State;