// import { createContext, useEffect, useState } from "react";
// import api from "../api/api";
// import Cookies from "js-cookie";

// const AllUsersContext = createContext();

// export default AllUsersContext;

// export const AllUsersContextProvider = ({ children }) => {
//   const [allUsers, setAllUsers] = useState();

//   useEffect(() => {
//     api.get("/users/all").then((res) => {
//       if (res.status === 200) {
//         console.log(res);
//         setAllUsers(res.data);
//       }
//     });
//   }, []);

//   return (
//     <AllUsersContext.Provider value={{ allUsers, setAllUsers }}>
//       {children}
//     </AllUsersContext.Provider>
//   );
// };

import { createContext } from "react";

const AllUsersContext = createContext();
export default AllUsersContext;
