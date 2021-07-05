import React from "react";
import { Link } from "react-router-dom";
// import { useRouteMatch } from "react-router-dom";
function NestedNavLinks(props) {
    // let match = useRouteMatch();
    // console.log(match)
  return (
    <div>
      <ul>
       
        <li>
        <Link to={`${props.sendurl}/contact1`}>Contact 1</Link>
        </li>
        <li>
        <Link to={`${props.sendurl}/contact2`}>Contact 2</Link>
        </li>
      
      </ul>
    </div>
  );
}

export default NestedNavLinks;
