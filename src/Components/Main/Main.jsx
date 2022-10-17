import React from "react";
import { useEffect, useState, createContext } from "react";
import { dataContext } from "../../Context";
import AppHeader from "../AppHeader/AppHeader";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [itemList, setItemList] = useState([]);
  const uploadItem = ({ nameInput, genreInput, dateInput }) => {
    const obj = {
      name: nameInput,
      genre: genreInput,
      date: dateInput,
      id: Date.now(),
    };
    localStorage.setItem(`${Date.now()}`, JSON.stringify(obj));
    itemList.push(obj);
    setItemList([...itemList]);
  };
  const updateItem = ({ nameInput, genreInput, dateInput, id }) => {
    const obj = {
      name: nameInput,
      genre: genreInput,
      date: dateInput,
      id: id,
    };
    localStorage.setItem(id, JSON.stringify(obj));
    const index = itemList.findIndex((item) => item.id === id);
    itemList.splice(index, 1, obj);
    setItemList([...itemList]);
  };
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
    <dataContext.Provider value={{ itemList, uploadItem, updateItem }}>
      <div>
        {" "}
        <AppHeader />
        <Outlet />
      </div>
    </dataContext.Provider>
  );
};

export default Main;
