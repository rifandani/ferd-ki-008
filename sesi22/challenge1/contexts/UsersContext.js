import React from "react";

export const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = React.useState({
    currentSort: "all",
    all: [],
    male: [],
    female: [],
  });

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
