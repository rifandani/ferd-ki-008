import React from 'react';
import { Text, FlatList, Flex, VStack } from 'native-base';

// You can import from local files
import Item from '../components/Item';

const GET_USERS_URL =
  'https://randomuser.me/api/?results=10&gender=female&inc=id,gender,name,location,email,picture';

export default function CustomersScreen() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const resp = await fetch(GET_USERS_URL);
      const json = await resp.json();

      setUsers(json.results);
    })();
  }, []);

  return (
    <Flex direction="column">
      <Text p={5} fontSize={20} fontWeight="bold" bg="blue.200">
        Customers
      </Text>

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            location={item.location}
            email={item.email}
            picture={item.picture}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Flex>
  );
}
