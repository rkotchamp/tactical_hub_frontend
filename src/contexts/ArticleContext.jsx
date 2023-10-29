import { createContext, useEffect, useState } from "react";
import api from "../api/api";

const ArticleContext = createContext();

export default ArticleContext;

export const ArticleContextProvider = ({ children }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    api.get("/articles");
  }, []);
  return (
    <ArticleContext.Provider value={{}}>{children}</ArticleContext.Provider>
  );
};
