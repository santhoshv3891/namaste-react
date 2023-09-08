import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h2>This is the title</h2>;

const Heading = () => (
  <div class="container">
    <h1>This is the main heading</h1>
    <Title />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
