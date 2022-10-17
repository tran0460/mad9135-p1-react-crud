import { createContext, useContext } from "react";

export const dataContext = createContext();

const useDataContext = () => {
  const context = useContext(dataContext);
  if (!context) throw new Error("NO CONTEXT FOUND");
  return context;
};

export { useDataContext };
