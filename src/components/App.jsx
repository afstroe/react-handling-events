import React from "react";

function App() {
  const [headingText, changeHeadingText] = React.useState("Hello");
  const [mouseOverSubmit, setMouseOverSubmit] = React.useState(false);
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        id="submit"
        style={{ backgroundColor: mouseOverSubmit ? "black" : "white" }}
        onMouseOut={() => {
          setMouseOverSubmit(false);
        }}
        onMouseOver={() => {
          setMouseOverSubmit(true);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
