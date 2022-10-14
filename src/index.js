import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";
import "./style/App.css";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //Helper Funciton - want to keep logic statements in a helper class

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loading message="Please Accept Geolocation Request" />;
  }

  //React says we have to define render!!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
