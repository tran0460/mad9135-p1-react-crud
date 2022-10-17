import React, { useState } from "react";
import Form from "../Form/Form";

const ListItem = (props) => {
  const { item } = props;
  const [editMode, setEditMode] = useState(false);
  const removeItem = () => {
    localStorage.removeItem(item.id);
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.genre}</p>
      <p>{item.date}</p>
      {editMode && (
        <Form
          mode="edit"
          nameValue={item.name}
          genreValue={item.genre}
          dateValue={item.date}
          id={item.id}
          closeRequest={() => setEditMode(false)}
        />
      )}
      <button
        onClick={() => {
          setEditMode(true);
        }}>
        Edit
      </button>
      <button
        onClick={() => {
          removeItem(item);
        }}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
