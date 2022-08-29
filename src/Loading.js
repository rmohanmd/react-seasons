import React from "react";

const Loading = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui indeterminate text loader">{props.message}</div>
    </div>
  );
};

//This provides a deafault message in case  you don't provide the argument.
//Can also be included in the line above as {props.message || "Loading..."} but it becomes cumbersome code
//if you are using the loader for multiple parts of your site.
Loading.defaultProps = {
  message: "Loading...",
};
export default Loading;
