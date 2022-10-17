import React from "react";
import ListItem from "../ListItem/ListItem";
import { useDataContext } from "../../Context";

const ListView = (props) => {
  const { itemList } = useDataContext();
  const { data } = props;
  return (
    <div>
      {itemList?.map((item) => {
        return <ListItem item={item} />;
      })}
    </div>
  );
};

export default ListView;
