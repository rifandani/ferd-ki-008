import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";

const colors = {
  rifandani: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
};

export default App;
