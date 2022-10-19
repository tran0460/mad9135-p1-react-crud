import React from "react";
import { useEffect, useState, createContext } from "react";
import { dataContext } from "../../Context";
import AppHeader from "../AppHeader/AppHeader";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

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
  const removeItem = (id) => {
    localStorage.removeItem(id);
    const index = itemList.findIndex((item) => item.id === id);
    itemList.splice(index, 1);
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
  return (
    <dataContext.Provider
      value={{ itemList, uploadItem, updateItem, removeItem }}>
      <div>
        {" "}
        <AppHeader />
        <Container
          maxWidth="xl"
          sx={{
            py: "1rem",
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            gap: "2rem",
          }}>
          <Outlet />
        </Container>
      </div>
    </dataContext.Provider>
  );
};

export default Main;
