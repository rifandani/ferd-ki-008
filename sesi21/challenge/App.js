import React from "react";
import { NativeBaseProvider, extendTheme, StatusBar } from "native-base";
// import { SafeAreaView } from "react-native-safe-area-context";

import PostsScreen from "./screens/PostsScreen";

// extend the theme
export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar />
      <PostsScreen />
    </NativeBaseProvider>
  );
}
