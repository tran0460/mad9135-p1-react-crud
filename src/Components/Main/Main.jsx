import React from "react";
import NewItemView from "../NewItemView/NewItemView";
import { useEffect, useState } from "react";

const Main = () => {
  const [itemList, setItemList] = useState([]);

  const getItemsFromStorage = () => {
    setItemList(
      Object.keys(localStorage).map(function (key) {
        return JSON.parse(localStorage.getItem(key));
      })
    );
  };
  useEffect(() => {
    window.onstorage = () => {
      // When local storage changes, update items
      getItemsFromStorage();
    };
  }, []);
  return (
    <div>
      {" "}
      <NewItemView />
    </div>
  );
};

export default Main;
