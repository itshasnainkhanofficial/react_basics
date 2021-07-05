import React from "react";
import NavLinks from "./pages/NavLinks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PageNoteFound from "./pages/PageNoteFound";
import AccessPram from './pages/AccessPram'
function ParentRouter() {



  return (
    <div>
      <Router>
        <NavLinks />
        {/* one way */}
        {/* <Route path="/" component={home} /> */}

        {/* <Route path="/" component={home} exact/>
            
          <Route path="/about"  component={about} />

          <Route path="/contact"  component={contact} /> */}

        {/* second way */}
        <Switch>

          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

        {/* sending data as params */}

        
          {/* for not optional */}
          <Route path="/accessparam/:id">
          {/* for optional */}
          {/* <Route path="/accessparam/:id?"> */}
            <AccessPram />
          </Route>



          <Route path="*">
            <PageNoteFound />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default ParentRouter;
