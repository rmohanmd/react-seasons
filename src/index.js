import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position.coords.latitude),
//     (err) => console.log(err)
//   );
//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  render() {
    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
