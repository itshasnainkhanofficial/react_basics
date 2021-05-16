import './App.css';
// import Objectmodify from './components/state/Objectmodify';
// import Count from './components/state/Counter';
// import Message from './components/state/message';
// import Button from './components/button/usingfunction';
// import ClassButton from './components/button/usingclass';
// import Functiongreet from './components/props/Functiongreet';
// import Classgreet from './components/props/Classgreet';
// import {Functiongreet} from './components/props/Functiongreet'
// import Withdefault from './components/props/Functiongreet'

function App() {
  return (
    <div className="container mx-auto">
      {/* <Button/>
      <ClassButton/> */}

      {/* props using functional component */}
      {/* use self closing tag when there is no content within tag */}
      {/* <Functiongreet name="Hasnain"/> 
      <Functiongreet name="Bilal" question="how was your day?"/> */}

      {/* with opening and closing tag when there is child content */}
      {/* <Functiongreet name="Kamran" question="Are you a teacher?">
        <p>yes</p>
      </Functiongreet>
      <Functiongreet name="Ali" question="Are you a Student?">
        <button className="bg-blue-400 rounded-full px-2 hover:bg-blue-500 text-white outline-none">Get Answer</button>
      </Functiongreet> */}


      {/* props using class component */}
      {/* use self closing tag when there is no content within tag */}
      {/* <Classgreet name="Hasnain"/> 
      <Classgreet name="Bilal" question="how was your day?"/> */}

      {/* with opening and closing tag when there is child content */}
      {/* <Classgreet name="Kamran" question="Are you a teacher?">
        <p>yes</p>
      </Classgreet>
      <Classgreet name="Ali" question="Are you a Student?">
        <button className="bg-blue-400 rounded-full px-2 hover:bg-blue-500 text-white outline-none">Get Answer</button>
      </Classgreet> */}


      {/* by exact same name */}
      {/* <Functiongreet name="Fazal" question="Are you a doctor?"></Functiongreet> */}

      {/* by modified name using default keyword */}
      {/* <Withdefault name="Arsalan" question="Are you Engineer?"></Withdefault> */}

      {/* <Message /> */}

      {/* <Count numbertoinc={5}/> */}
      {/* <Objectmodify /> */}
    </div>
  );
}

export default App;
