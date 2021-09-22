import { useHistory } from "react-router";
import UserTable from "../components/user-table/UserTable";
import "./Users.css";

const Users = () => {
  const { push } = useHistory();

  return (
    <section data-testid="users" className="users">
      <button
        data-testid="usersButton"
        className="users__button"
        onClick={() => push("/")}
      >
        Back To Home
      </button>

      <UserTable />
    </section>
  );
};

export default Users;
