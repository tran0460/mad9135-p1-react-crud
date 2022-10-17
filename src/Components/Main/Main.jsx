import React from "react";
import { useEffect, useState, createContext } from "react";
import { dataContext } from "../../Context";
import AppHeader from "../AppHeader/AppHeader";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [itemList, setItemList] = useState([]);

  const getItemsFromStorage = () => {
    setItemList(
      Object.keys(localStorage).map(function (key) {
        return JSON.parse(localStorage.getItem(key));
      })
    );
  };
  useEffect(() => getItemsFromStorage(), []);
  useEffect(() => {
    window.onstorage = () => {
      // When local storage changes, update items
      getItemsFromStorage();
    };
  }, []);
  return (
    <dataContext.Provider value={{ itemList }}>
      <div>
        {" "}
        <AppHeader />
        <Outlet />
      </div>
    </dataContext.Provider>
  );
};

export default Main;
