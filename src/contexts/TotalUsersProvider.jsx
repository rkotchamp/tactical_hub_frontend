import { useEffect, useState } from "react";
import api from "../api/api";

import AllUsersContext from "./AllUsersContext";

export const TotalUsersProvider = ({ children }) => {
  const [totalUsers, setTotalUsers] = useState();
  useEffect(() => {
    api.get("/users/all").then((res) => {
      if (res.status === 200) {
        // console.log(res);
        setTotalUsers(res.data);
      }
    });
  }, []);

  return (
    <AllUsersContext.Provider value={{ totalUsers, setTotalUsers }}>
      {children}
    </AllUsersContext.Provider>
  );
};
