import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ childern }) => {
  const [user, setUser] = useState(null);
  <UserContext.Provider value={{ user, setUser }}>
    return(
    {childern})
  </UserContext.Provider>;
};

export default UserContextProvider;
