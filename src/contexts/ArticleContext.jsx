import { createContext, useEffect, useState } from "react";
import api from "../api/api";

const ArticleContext = createContext();

export default ArticleContext;

export const ArticleContextProvider = ({ children }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    api.get("/articles").then((res) => {
      if (res.status === 200 && res.data !== null) {
        setPosts(res.data);
      }
    });
  }, []);
  return (
    <ArticleContext.Provider value={{ posts, setPosts }}>
      {children}
    </ArticleContext.Provider>
  );
};
