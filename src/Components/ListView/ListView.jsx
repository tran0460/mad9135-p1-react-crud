import React from "react";
import ListItem from "../ListItem/ListItem";

const ListView = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((item) => {
        return <ListItem item={item} />;
      })}
    </div>
  );
};

export default ListView;
