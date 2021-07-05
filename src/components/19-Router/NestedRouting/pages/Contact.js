import React from "react";
import NestedNavLinks from "./NestedNavLinks";
import { BrowserRouter as Router, Switch, Route, useRouteMatch} from "react-router-dom";
// import {Link} from 'react-router-dom'
import Contact1 from "./nestedcontact/Contact1";
import Contact2 from "./nestedcontact/Contact2";

function Contact() {
    let match = useRouteMatch();
    console.log(match);
  return (
    <div>
      <Router>

        {/* <ul>
       
        <li>
        <Link to={`${match.url}/contact1`}>Contact 1</Link>
        </li>
        <li>
        <Link to={`${match.url}/contact2`}>Contact 2</Link>
        </li>
      
      </ul> */}
      
        <NestedNavLinks sendurl={match.url} />

        <Switch>

            
          <Route path={`${match.path}/contact1`}>
            <Contact1 />
          </Route>


          <Route path={`${match.path}/contact2`}>
            <Contact2 />
          </Route>
          <Route path="/">
            <Contact1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Contact;
