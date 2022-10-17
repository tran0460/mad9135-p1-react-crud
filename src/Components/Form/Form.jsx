import React, { useState } from "react";

const Form = (props) => {
  const {
    mode = "create",
    closeRequest,
    nameValue = "",
    genreValue = "",
    dateValue = "",
    id,
  } = props;
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
  const updateItem = () => {
    const obj = {
      name: nameInput,
      genre: genreInput,
      date: dateInput,
      id: id,
    };
    localStorage.setItem(id, JSON.stringify(obj));
    window.dispatchEvent(new Event("storage"));
    // hide the form
    closeRequest();
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
      <button
        onClick={() => {
          closeRequest();
        }}>
        Cancel
      </button>
      <button
        onClick={() => {
          if (mode === "create") return uploadItem();
          return updateItem();
        }}>
        Submit
      </button>
    </div>
  );
};

export default Form;
