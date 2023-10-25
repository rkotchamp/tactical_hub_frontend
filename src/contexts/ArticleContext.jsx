import { createContext, useState } from "react";

const ArticleContext = createContext();

export default ArticleContext;

export const ArticleContextProvider = ({ children }) => {
  return (
    <ArticleContext.Provider value={{}}>{children}</ArticleContext.Provider>
  );
};
