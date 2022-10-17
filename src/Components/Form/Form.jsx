import React from "react";

const Form = () => {
  return (
    <div>
      <label htmlFor="name"></label>
      <input type="text" id="name" placeholder="Game name" />
      <label htmlFor="genre"></label>
      <input type="text" id="genre" placeholder="Game genre" />
      <label htmlFor="release-date"></label>
      <input type="text" id="release-date" placeholder="Game release date" />
      <button>Cancel</button>
      <button>Button</button>
    </div>
  );
};

export default Form;
