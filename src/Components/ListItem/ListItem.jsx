import React, { useState } from "react";
import Form from "../Form/Form";

const ListItem = (props) => {
  const { item } = props;
  const [editMode, setEditMode] = useState(false);
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.genre}</p>
      <p>{item.date}</p>
      {editMode && (
        <Form
          nameValue={item.name}
          genreValue={item.genre}
          dateValue={item.date}
          onCancel={() => setEditMode(false)}
        />
      )}
      <button
        onClick={() => {
          setEditMode(true);
        }}>
        Edit
      </button>
      <button>Delete</button>
    </div>
  );
};

export default ListItem;
