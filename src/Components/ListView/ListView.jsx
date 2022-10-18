import React from "react";
import ListItem from "../ListItem/ListItem";
import { useDataContext } from "../../Context";

const ListView = (props) => {
  const { itemList } = useDataContext();
  return (
    <div>
      {itemList?.map((item) => {
        return <ListItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ListView;
