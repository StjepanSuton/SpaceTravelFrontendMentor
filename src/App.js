import Home from "./components/Home";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import DestinationHome from "./components/Destination/DestinationHome";
import NavBar from "./components/NavBar/NavBar";
import { Fragment } from "react";
import "./App.css";
import CrewHome from "./components/Crew/CrewHome";
import { AnimatePresence } from "framer-motion";
import TechnologyHome from "./components/Technology/TechnologyHome";
function App() {
  const location = useLocation();

  return (
    <Fragment>
      <NavBar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path={"/"} exact>
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Destination">
            <DestinationHome />
          </Route>
          <Route path="/Crew">
            <CrewHome />
          </Route>
          <Route path="/Technology">
            <TechnologyHome />
          </Route>
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
