import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Item from './components/Item';

const GET_USERS_URL =
  'https://randomuser.me/api/?results=10&gender=female&inc=id,gender,name,location,email,picture';

export default function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await fetch(GET_USERS_URL);
    const json = await resp.json();

    setUsers(json.results);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Customers</Text>

      <View style={styles.usersContainer}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'azure',
  },
  paragraph: {
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'beige',
    backgroundColor: 'cyan',
  },
  usersContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'beige',
  },
});
