import { useEffect, useState } from "react";
import "./Users.css";

const GET_USERS_URL = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await fetch(GET_USERS_URL);
    const json = await resp.json();

    setUsers(json);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users">
      <h6 className="users__title">Fetch Users Data</h6>

      <hr className="separator" />

      <pre>{JSON.stringify(users, null, 3)}</pre>
    </div>
  );
};

export default Users;
