import React from "react";

function App() {
  const [name, changeName] = React.useState("");
  const [mouseOverSubmit, setMouseOverSubmit] = React.useState(false);
  const [headingName, changeHeadingName] = React.useState("");

  return (
    <div className="container">
      <h1>Hullo {headingName}</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="What's your name?"
          onChange={event => {
            changeName(event.target.value);
          }}
          value={name}
        />
        <button
          type="submit"
          id="submit"
          style={{ backgroundColor: mouseOverSubmit ? "black" : "white" }}
          onMouseOut={() => {
            setMouseOverSubmit(false);
          }}
          onMouseOver={() => {
            setMouseOverSubmit(true);
          }}
          onClick={() => {
            changeHeadingName(name);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
