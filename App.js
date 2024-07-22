import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
      <h1 className="title">Namste React 🚀</h1>
    );

const HeadComponent = () => (
      <div className="container">
        <Title />
        <h1>Hey</h1>
      </div>
    );

root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadComponent />);
