import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GoogleNav from "./components/GoogleNav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <GoogleNav />
        <Jumbotron />
        <Switch>
          <Route exact path={["/"]}>
            <Search />
          </Route>
          <Route exact path={["/saved", "/saved/:id"]}>
            <Saved />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
