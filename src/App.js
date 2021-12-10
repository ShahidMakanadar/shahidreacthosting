import React from "react";
import About from "./Component/About"
import Contact from "./Component/Contact"
import Home from "./Component/Home"
import Header from "./Component/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>

    </div>


  );
}
export default App;
