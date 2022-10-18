import React, { useState } from "react";
import { useDataContext } from "../../Context";

const Form = (props) => {
  const {
    closeRequest,
    nameValue = "",
    genreValue = "",
    dateValue = "",
    id,
  } = props;
  const { uploadItem, updateItem } = useDataContext();
  const [nameInput, setNameInput] = useState(nameValue);
  const [genreInput, setGenreInput] = useState(genreValue);
  const [dateInput, setDateInput] = useState(dateValue);
  const resetForm = () => {
    setNameInput("");
    setGenreInput("");
    setDateInput("");
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
          if (!id) {
            uploadItem({
              nameInput,
              genreInput,
              dateInput,
            });
            resetForm();
            return;
          }
          updateItem({
            nameInput,
            genreInput,
            dateInput,
            id,
          });
          resetForm();
          closeRequest();
        }}>
        Submit
      </button>
    </div>
  );
};

export default Form;
