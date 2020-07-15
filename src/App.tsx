import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import Routes from "./routes/index";
import Navigation from "./components/molecules/Navigation/Navigation";
import {navLinksFooter} from "./components/molecules/Navigation/Navigation.fixture";

const App: React.FC = () => {
  return (
      <Router>
        <Header />
        <Routes />
        <Navigation navText={navLinksFooter} textStyle="subtitle" classname="navigate-footer" />
      </Router>
  );
};

export default App;
