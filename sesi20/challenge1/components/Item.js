import * as React from "react";
import { Image, Text, Flex, Spacer } from "native-base";

export default function Item({ name, location, email, picture }) {
  const fullName = `${name.title}. ${name.first} ${name.last}`;

  return (
    <Flex
      flex={1}
      p={5}
      direction="row"
      rounded="lg"
      borderBottomWidth="1"
      borderColor="coolGray.200"
      bg="blue.50"
    >
      <Image
        size={60}
        resizeMode="contain"
        borderRadius={5}
        mr={5}
        alt={fullName}
        source={{ uri: picture.medium }}
      />

      <Flex flex={1} direction="column">
        <Text bold>{fullName}</Text>
        <Text italic isTruncated>
          {`${location.street.number}. ${location.street.name} ${location.city}`}
        </Text>
        <Text isTruncated color="red.500">
          {email}
        </Text>
      </Flex>
    </Flex>
  );
}
