import React from "react";
import * as ReactDOM from "react-dom/client";
import ListUsers from "./services/ListUsers";
import SimpleLoginComponent from "./SimpleLoginComponent";

function ExampleComponent() {
  return (
    <>
      <SimpleLoginComponent />
      <ListUsers />
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
//root.render(<SimpleLoginComponent></SimpleLoginComponent>);
root.render(<ExampleComponent></ExampleComponent>);
if (module.hot) {
  module.hot.accept();
}
