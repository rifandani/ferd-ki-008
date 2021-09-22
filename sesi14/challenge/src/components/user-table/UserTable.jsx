import { useEffect, useState } from "react";
import "./UserTable.css";

const GET_USERS_URL = "https://jsonplaceholder.typicode.com/users";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await fetch(GET_USERS_URL);
    const result = await resp.json();

    setUsers(result);
  };

  return (
    <table data-testid="userTable" className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.email}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
