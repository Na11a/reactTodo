import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { 
      counter: 0,
      seconds:0
     };
  }
  componentDidMount(){
    setInterval(()=>
      this.tick()
  ,1000);
  } 
  tick() {
    this.setState({seconds:this.state.seconds + 1})
  };

  render() {
    return <div>
      <p>Counter:{this.state.counter}</p>
      <p>Seconds from start:{this.state.seconds}</p>
    </div>;
  }
}

export default App;
