import { createContext, useContext } from "react";

export const dataContext = createContext();

const useDataContext = () => {
  const context = useContext(dataContext);
  return context;
};

export { useDataContext };
