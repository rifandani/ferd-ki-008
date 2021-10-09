import React from "react";
import { HStack, Text, Switch, useColorMode } from "native-base";

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>

      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />

      <Text>Light</Text>
    </HStack>
  );
}

export default ToggleDarkMode;
