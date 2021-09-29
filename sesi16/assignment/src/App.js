import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ToolkitPage from "./pages/ToolkitPage";
import legacyStore from "./redux/toolkit/store";
import toolkitStore from "./redux/legacy/store";

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
    <Router>
      <Provider store={toolkitStore}>
        <ChakraProvider theme={theme}>
          <Switch>
            <Route path="/toolkit">
              <ToolkitPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </ChakraProvider>
      </Provider>
    </Router>
  );
};

export default App;
