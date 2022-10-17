import React, { useState } from "react";

const Form = (props) => {
  const { nameValue = "", genreValue = "", dateValue = "" } = props;
  const [nameInput, setNameInput] = useState(nameValue);
  const [genreInput, setGenreInput] = useState(genreValue);
  const [dateInput, setDateInput] = useState(dateValue);

  const uploadItem = () => {
    const obj = {
      name: nameInput,
      genre: genreInput,
      date: dateInput,
      id: Date.now(),
    };
    localStorage.setItem(`${Date.now()}`, JSON.stringify(obj));
    setNameInput("");
    setGenreInput("");
    setDateInput("");
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <div>
      <label htmlFor="name">Game name</label>
      <input
        value={nameInput}
        onChange={(ev) => setNameInput(ev.target.value)}
        type="text"
        id="name"
        placeholder="Name"
      />
      <label htmlFor="genre">Game Genre</label>
      <input
        value={genreInput}
        onChange={(ev) => setGenreInput(ev.target.value)}
        type="text"
        id="genre"
        placeholder="Genre"
      />
      <label htmlFor="release-date">Game release date</label>
      <input
        value={dateInput}
        onChange={(ev) => setDateInput(ev.target.value)}
        type="text"
        id="release-date"
        placeholder="Release date"
      />
      <button onClick={() => {}}>Cancel</button>
      <button
        onClick={() => {
          uploadItem();
        }}>
        Submit
      </button>
    </div>
  );
};

export default Form;
