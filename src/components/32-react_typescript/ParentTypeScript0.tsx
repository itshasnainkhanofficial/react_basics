import ButtonEvent from "./ButtonEvent8";
import ChildReact from "./ChildReact6";
import {Greet} from "./Greet1";
import Heading from "./Heading5";
import Optional from "./Optional7";
import { Person } from "./Person2";
import { PersonList } from "./PersonList3";
import { Status } from "./Status4";
import InputEvent from './InputEvent9'
import Style10 from "./Style10";
import Destructuring from "./Destructuring11";
import ImportType from "./ImportType12";
import Reuse from "./Reuse14";
const ParentTypeScript = () => {

    const PersonName = {
        first : "Hasnain",
        last : "Khan"
    }

    const NameList = [
        {
            id : 1,
            name : "Ali"
        },
        {
            id: 2,
            name : "Faraz"
        }
    ]
    return (
    
        <>
        <Greet name="hasnain" message={30} isLoggedIn={false}/>
        <hr />
        <Person name={PersonName}/>
        <hr />
        <PersonList name={NameList}/>
        <hr />
        <Status status="success"/>
        <hr />
        <Heading>This is a Heading</Heading>
        <hr />
        <ChildReact> <Person name={PersonName}/>  </ChildReact>
        <hr />
        <Optional name="Hasnain" age={26}/>
        <hr />
        {/* <ButtonEvent handleClick={ () => console.log("handled click")}/> */}
        {/* <ButtonEvent handleClick={ (e) => console.log("handled click", e)}/> */}
        <ButtonEvent handleClick={ (e , id) => console.log("handled click", e , id)}/>
        <hr />
        <InputEvent value="" HandleEvent={e => console.log(e)}/>
        <hr />
        <Style10 style={{border : "1px solid black" , padding : "1rem"}}/>
        <br />
        <hr />
        <Destructuring name="hasnain" fname="shahid"/>

        <hr />
        <ImportType id={1} name="Ali"/>
        <hr />

        <Reuse identity={NameList}/>
        </>
    )
    
}

export default ParentTypeScript