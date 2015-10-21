import React from "react";
import ReactDOM from "react-dom";
import RootApp from "./root-app";

ReactDOM.render(
  <RootApp/>,
  document.getElementById('app')
);

function init() {
  console.log("init");
};

document.addEventListener("DOMContentLoaded", function() {
  init();
});
