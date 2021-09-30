import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ToolkitPage from "./pages/ToolkitPage";
import toolkitStore from "./redux/toolkit/store";
import legacyStore from "./redux/legacy/store";

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
      <ChakraProvider theme={theme}>
        <Switch>
          <Route path="/toolkit">
            <Provider store={toolkitStore}>
              <ToolkitPage />
            </Provider>
          </Route>
          <Route exact path="/">
            <Provider store={legacyStore}>
              <HomePage />
            </Provider>
          </Route>
        </Switch>
      </ChakraProvider>
    </Router>
  );
};

export default App;
