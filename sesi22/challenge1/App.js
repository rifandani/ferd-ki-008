import React from "react";
import { NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

import UsersScreen from "./screens/UsersScreen";
import ThemeProvider from "./contexts/ThemeContext";
import UsersProvider from "./contexts/UsersContext";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ThemeProvider>
          <UsersProvider>
            <UsersScreen />
          </UsersProvider>
        </ThemeProvider>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
