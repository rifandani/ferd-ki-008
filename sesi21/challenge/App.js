import * as React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";

import PostsScreen from "./screens/PostsScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="default" />
      <PostsScreen />
    </NativeBaseProvider>
  );
}
