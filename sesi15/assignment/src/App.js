import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import SkillPage from "./pages/SkillPage";
import InterestPage from "./pages/InterestPage";
import AwardPage from "./pages/AwardPage";

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
            <Route path="/award">
              <AwardPage />
            </Route>
            <Route path="/interest">
              <InterestPage />
            </Route>
            <Route path="/skill">
              <SkillPage />
            </Route>
            <Route path="/experience">
              <ExperiencePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </ChakraProvider>
      </Router>
    </div>
  );
};

export default App;
