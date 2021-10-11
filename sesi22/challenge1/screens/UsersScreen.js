import React from "react";
import { FlatList, VStack, Select, CheckIcon } from "native-base";

// You can import from local files
import Header from "../components/Header";
import Item from "../components/Item";
import { UsersContext } from "../contexts/UsersContext";

const GET_USERS_URL =
  "https://randomuser.me/api/?results=10&inc=id,gender,name,location,email,picture";

export default function UsersScreen() {
  const { users, setUsers } = React.useContext(UsersContext);
  const [currentUsers, setCurrentUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const resp = await fetch(GET_USERS_URL);
      const json = await resp.json();

      // set to context
      setUsers((prev) => ({
        ...prev,
        all: json.results,
        male: json.results.filter((user) => user.gender === "male"),
        female: json.results.filter((user) => user.gender === "female"),
      }));

      // set to local state
      setCurrentUsers(json.results);
    })();
  }, []);

  return (
    <VStack h="100%">
      <Header />

      <Select
        m={5}
        minWidth="200"
        accessibilityLabel="Sort users by"
        placeholder="Sort users by..."
        selectedValue={users.currentSort}
        _selectedItem={{
          bg: "blue.600",
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={(itemValue) => {
          setUsers((prev) => ({
            ...prev,
            currentSort: itemValue,
          }));
          setCurrentUsers(users[itemValue]);
        }}
      >
        <Select.Item label="All Gender" value="all" />
        <Select.Item label="Only Male" value="male" />
        <Select.Item label="Only Female" value="female" />
      </Select>

      <FlatList
        data={currentUsers}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            location={item.location}
            email={item.email}
            picture={item.picture}
          />
        )}
      />
    </VStack>
  );
}
