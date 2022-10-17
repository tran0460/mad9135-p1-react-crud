import React from "react";

const ListItem = (props) => {
  const { item } = props;

  return (
    <div>
      <p>{item.name}</p>
      <p>{item.genre}</p>
      <p>{item.date}</p>
    </div>
  );
};

export default ListItem;
