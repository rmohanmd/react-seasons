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

    this.state = { lat: null };
  }

  //React says we have to define render!!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position.coords.latitude),
      (err) => console.log(err)
    );
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
