import React, { useState } from "react";
import Form from "../Form/Form";
import { useDataContext } from "../../Context";
const ListItem = (props) => {
  const { removeItem } = useDataContext();
  const { item } = props;
  const [editMode, setEditMode] = useState(false);
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
          removeItem(item.id);
        }}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
