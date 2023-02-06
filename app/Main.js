import React from "react";
import * as ReactDOM from 'react-dom/client';


function ExampleComponent(){
    return (
        <div>
            <h1>JSX React</h1>
            <p>ae eee</p>
        </div>
    )
}
const root = ReactDOM.createRoot(
    document.querySelector("#app")
  );
  root.render(<ExampleComponent></ExampleComponent>);
  if(module.hot){
    module.hot.accept();
  }