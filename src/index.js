import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //Another function we can use but isn't required for react constructor() (a javascript function)
  //constructor function is first to be called so it's great to use to initiate state
  constructor(props) {
    //have to use this first, because React.Compenent class has it's own necessary constructor but using our own
    //constructor stops React.Component from using it's contructor funciton. Thus we use super(props) to
    //also run the React.Component contructor()
    super(props); //calls parents constructor function

    this.state = { lat: null, errorMessage: "" }; //this is the only time we directly assign anything to this.state
    //moved this from render() because render() will be called so often, keeping this code in there will
    //bog down the system
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setstate to update our state object!!!!
        this.setState({ lat: position.coords.latitude });
        //DO NOT DIRECT ASSIGN IT LIKE THIS this.state.lat = position.coords.latitude
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //React says we have to define render!!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div> Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
