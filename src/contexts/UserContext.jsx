import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import api from "../api/api";
import { useLocation, useNavigate } from "react-router-dom";

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = ({ children }) => {
  // create all that u want to share

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      api
        .get("/users", config)
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data);
            setIsLoading(false);
            if (location.pathname === "/") {
              navigate("/home");
            } else {
              navigate(location.pathname);
            }
          }
        })
        .catch((err) => console.error(err));
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
