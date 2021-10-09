import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Item({ name, location, email, picture }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: picture.medium }} />

      <View style={styles.userDataContainer}>
        <Text style={styles.name}>
          {`${name.title}. ${name.first} ${name.last}`}
        </Text>
        <Text style={styles.address}>
          {`${location.street.number}. ${location.street.name} ${location.city}`}
        </Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    backgroundColor: "azure",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  img: {
    height: 60,
    width: 60,
    resizeMode: "cover",
  },
  userDataContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
  },
  address: {
    fontSize: 12,
    fontStyle: "italic",
    color: "gray",
  },
  email: {
    fontSize: 12,
    color: "tomato",
  },
});
