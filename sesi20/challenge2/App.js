import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";

import WishlistScreen from "./screens/WishlistScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <WishlistScreen />
    </NativeBaseProvider>
  );
}
