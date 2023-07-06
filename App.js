import React from "react";
import ReactDOM from'react-dom/client';

// **************** In production build PARCEL does below things**********
// ******** HMR - Hot Module Reloading *******
// ******** File Watcher Algorithms ********
// ******** Bundling *******
// ******** Minify*****
// ******** Cleaning our Code*******
// ******** Superfast build algorithms******
// ********Dev and Production Build*********
//******Image Optimization*********
//********Caching while development******/


const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

// it is like <h1 id="title">Heading 1</h1> and produce DOM element of this.

const heading2 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);