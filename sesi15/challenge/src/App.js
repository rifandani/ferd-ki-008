import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TodosPage from "./pages/TodosPage";
import LoginPage from "./pages/LoginPage";

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
    <div className="app">
      <Router>
        <ChakraProvider theme={theme}>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/todos">
              <TodosPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </ChakraProvider>
      </Router>
    </div>
  );
};

export default App;
