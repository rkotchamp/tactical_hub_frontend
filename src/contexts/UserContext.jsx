import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import api from "../api/api";
import { useLocation, useNavigate } from "react-router-dom";

const UserContext = createContext();

export default UserContext;
const serviceRanks = [
  { rank: "constable", initials: "CONST" },
  { rank: "lance corporal", initials: "L/CPL" },
  { rank: "corporal", initials: "CPL" },
  { rank: "sergeant", initials: "SGT" },
  { rank: "inspector", initials: "INSPR" },
  { rank: "chief inspector", initials: "C/INSPR" },
  { rank: " assistant superintendent of police", initials: "ASP" },
  { rank: "deputy superintendent of police", initials: "DSP" },
  { rank: "superintendent of police", initials: "SUPT" },
  { rank: "assistant commissioner of police", initials: "ACP" },
  { rank: "deputy commissioner of police", initials: "DCOP" },
  { rank: "commissioner of police", initials: "COP" },
  { rank: "deputy inspector general of police", initials: "D/IGP" },
  { rank: "inspector general of police", initials: "IGP" },
];

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
            const dataServiceRankLowerCase =
              res.data.service_rank.toLowerCase();

            serviceRanks.forEach((eachRank) => {
              const eachRankLowerCase = eachRank.rank.toLowerCase();

              const eachInitialsLowerCase = eachRank.initials.toLowerCase();
              if (
                dataServiceRankLowerCase === eachRankLowerCase ||
                dataServiceRankLowerCase === eachInitialsLowerCase
              ) {
                res.data.service_rank = eachRank.initials;
              }
            });
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
