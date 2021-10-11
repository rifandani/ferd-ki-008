import React from "react";
import { HStack, Text, Switch, SunIcon, MoonIcon } from "native-base";

import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const [checked, setChecked] = React.useState(false);
  const { theme, setTheme } = React.useContext(ThemeContext);

  const onToggle = () => {
    // TODO: switch theme CONTEXT
    setTheme((prev) => ({
      ...prev,
      isLightMode: !prev.isLightMode,
    }));
    setChecked((prev) => !prev);
  };

  return (
    <HStack
      p={5}
      justifyContent="space-between"
      bg={theme.isLightMode ? theme.light.headerBg : theme.dark.headerBg}
    >
      <Text
        fontSize={20}
        fontWeight="bold"
        color={
          theme.isLightMode
            ? theme.light.headerTitleColor
            : theme.dark.headerTitleColor
        }
      >
        Users
      </Text>

      <HStack space={1} alignItems="center">
        <SunIcon size="5" color="orange.500" />
        <Switch size="md" isChecked={checked} onToggle={onToggle} />
        <MoonIcon size="5" color="coolGray.800" />
      </HStack>
    </HStack>
  );
};

export default Header;
