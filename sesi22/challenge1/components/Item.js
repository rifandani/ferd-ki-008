import React from "react";
import { Image, Text, HStack, VStack } from "native-base";

import { ThemeContext } from "../contexts/ThemeContext";

function Item({ name, location, email, picture }) {
  const { theme } = React.useContext(ThemeContext);

  const fullName = React.useMemo(
    () => `${name.title}. ${name.first} ${name.last}`,
    [name]
  );

  return (
    <HStack
      h={100}
      p={5}
      borderBottomWidth="1"
      borderColor={
        theme.isLightMode
          ? theme.light.itemBorderColor
          : theme.dark.itemBorderColor
      }
      bg={theme.isLightMode ? theme.light.itemBg : theme.dark.itemBg}
    >
      <Image
        size={60}
        resizeMode="contain"
        borderRadius={5}
        mr={5}
        alt={fullName}
        source={{ uri: picture.medium }}
      />

      <VStack flex={1}>
        <Text
          bold
          color={
            theme.isLightMode
              ? theme.light.itemFullname
              : theme.dark.itemFullname
          }
        >
          {fullName}
        </Text>

        <Text
          italic
          isTruncated
          color={
            theme.isLightMode ? theme.light.itemAddress : theme.dark.itemAddress
          }
        >
          {`${location.street.number}. ${location.street.name} ${location.city}`}
        </Text>

        <Text
          isTruncated
          color={
            theme.isLightMode ? theme.light.itemEmail : theme.dark.itemEmail
          }
        >
          {email}
        </Text>
      </VStack>
    </HStack>
  );
}

export default React.memo(Item);
