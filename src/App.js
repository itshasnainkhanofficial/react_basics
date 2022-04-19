import './App.css';
// import ParentTypeScript from './components/32-react_typescript/ParentTypeScript0';
// import Reduxparent from './components/28-redux/Reduxparent';
// import DeletePost from './components/27-HttpMothods/FunctionalComp/DeletePost';
// import PutPost from './components/27-HttpMothods/FunctionalComp/PutPost';
// import FetchButton from './components/27-HttpMothods/FunctionalComp/FetchButton';
// import PostData from './components/27-HttpMothods/FunctionalComp/PostData';
// import GetFunction from './components/27-HttpMothods/FunctionalComp/GetFunction';
// import GetIndiv from './components/27-HttpMothods/FunctionalComp/GetIndiv';
// import Parentclean from './components/26-EffectCleanup/Parentclean';
// import ParentCondition from './components/24-ConditionalEffect/ParentCondition';
// import ParentMemo1 from './components/18-memo/ParentMemo1';
// import LifeCycleParent1 from './components/12-lifecycle/LifeCycleParent1';
// import List from './components/9-list/1-List';
// import ShortCircuit from './components/8-Conditional_rendering/ShortCircuit';
// import Ternary from './components/8-Conditional_rendering/Ternary';
// import ElementVariables from "./components/8-Conditional_rendering/ElementVariables";
// import IfElese from './components/8-Conditional_rendering/IfElese';
// import Child from './components/7-CompCommunication/ChildToParent/Child';
// import Parent from './components/7-CompCommunication/ChildToParent/Parent';
// import Parentcomp from './components/7-CompCommunication/MethodFromParentToChild/Parentcomp';
// import ArrowFunctionForFunction from './components/6-eventBinding/ArrowFunctionForFunction4';
// import OfficialDocApprch from './components/6-eventBinding/OfficialDocApprch';
// import ArrowFuncInRender from './components/6-eventBinding/ArrowFuncInRender3';
// import FirstSolution from './components/6-eventBinding/BindingInRender2'; 
// import ClassEvent from './components/5-event-handling/ClassEvent';
// import Problem from './components/6-eventBinding/Problem1';
// import Functionalevent from './components/5-event-handling/functionalevent';
// import ClassGreet from './components/4-Destructuring/ClassGreet';
// import Greet from './components/Destructuring/Greet';
// import Objectmodify from './components/3-state/Objectmodify';
// import Count from './components/3-state/Counter';
// import Message from './components/3-state/message';
// import Button from './components/1-classfuncdiff/usingfunction';
// import ClassButton from './components/1-classfuncdiff/usingclass';
// import Functiongreet from './components/2-props/Functiongreet';
// import Classgreet from './components/2-props/Classgreet';
// import Withdefault from './components/2-props/Functiongreet'
// import StylesheetParent0 from './components/10-StylingComp/StylesheetParent0'
// import Form1 from './components/11-formHandling/Form1'
// import LifeCycleA from './components/13-OrderLifeCycleMountUpdating/LifeCycleA';
// import Fragment1 from './components/14-Fragments/Fragment1'
// import Table2 from './components/14-Fragments/Table2'
// import Columns3 from './components/14-Fragments/Columns3'
// import ParentContext1 from './components/15-Context/ParentContext1'
// import ParentWithoutHOC1 from './components/16-HOC/1-WithoutHOC/ParentWithoutHOC1'
// import ParentWithHOC1 from './components/16-HOC/2-WithHOC/ParentWithHOC1'
// import ParentPure1 from './components/17-pureComponents/ParentPure1';
// import ParentRouter from './components/19-Router/SimpleRouting/ParentRouter1'
// import ParentState from './components/20-useState/ParentState';
// import WithObject from './components/21-useStateWithObject/WithObject';
// import ParentRouting2 from './components/19-Router/NestedRouting/ParentRouting2'
// import WithArray from './components/22-useStateWithArray/WithArray'
// import ParentOnce from './components/25-EffectOnlyOnce/ParentOnce'
// import ParentMethods from './components/27-HttpMothods/ClassComp/ParentMethods'


import { Provider } from "react-redux";
// import ToolkitParent from './components/29-redux_toolkit/ToolkitParent';
// import store from './components/29-redux_toolkit/store'
// import ThunkParent from './components/30-redux_Thunk/ThunkParent';
// import store from './components/30-redux_Thunk/store'
// import store from "./components/28-redux/redux/store";
// import { fetchUsers } from './components/30-redux_Thunk/features/users/usersSlice'
// import ParentCoreReduxThunk from './components/31-core_redux_thunk/ParentCoreReduxThunk';
// // fetching users only one time
// store.dispatch(fetchUsers())

// import store from './components/31-core_redux_thunk/redux/store'
// import ParentCoreReduxThunk from './components/31-core_redux_thunk/ParentCoreReduxThunk';
import ReduxReviewParent from './components/33-redux-review/Redux-review-parent';
import store from './components/33-redux-review/redux/store'
// ended
function App() {


  return (
    // <div className="container mx-auto">
    <div>
      {/* <PutPost/> */}
      {/* <DeletePost/> */}
      {/* <PostData/> */}
      {/* <FetchButton/> */}
      {/* <GetIndiv/> */}
      {/* <GetFunction/> */}
      {/* <ParentMethods/> */}
      {/* <Parentclean/> */}
      {/* <ParentOnce/> */}
      {/* <ParentCondition/> */}
      {/* <WithArray/> */}
      {/* <WithObject/> */}
      {/* <ParentState/> */}
      {/* <ParentRouting2/> */}
      {/* <ParentRouter/> */}
      {/* <ParentMemo1/> */}
      {/* <ParentPure1/> */}
      {/* <ParentWithHOC1/> */}
      {/* <ParentWithoutHOC1/> */}
      {/* <ParentContext1/> */}
      {/* <Columns3/> */}
      {/* <Table2/> */}

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

      {/* <Greet name="Hasnain" lastname="khan"/> */}
      {/* <ClassGreet name="Hasnain" lastname="khan"/> */}
      
      {/* <Functionalevent /> */}
      {/* <ClassEvent/> */}
      {/* <Problem/> */}
      {/* <FirstSolution/> */}
      {/* <ArrowFuncInRender/> */}
      
      {/* <OfficialDocApprch/> */}
      {/* <ArrowFunctionForFunction/> */}


      {/* using the following parentcompnent i want to call method from parent to child component*/}

      {/* <Parentcomp/> */}
      {/* using the following parentcompnent i want to call method from child to parent component*/}
      {/* its called lifting up state */}
      {/* <Parent/> */}
      {/* <Child/> */}

      {/* <IfElese/> */}

      {/* <ElementVariables/> */}
      
      {/* <Ternary/> */}
      {/* <ShortCircuit/> */}
      
      {/* <List/> */}

      {/* <StylesheetParent0/> */}

      {/* <Form1/> */}
      

      {/* <LifeCycleParent1/> */}

      {/* <LifeCycleA/> */}

      {/* <Fragment1/> */}
      
      {/* <Provider store={store}>
      <Reduxparent/>
      </Provider> */}

      {/* <Provider store={store}>
      <ToolkitParent/>
      </Provider> */}


      {/* <Provider store={store}> */}
      {/* <ThunkParent/> */}
      {/* </Provider> */}



      {/* <Provider store={store}>
        <ParentCoreReduxThunk/>
      </Provider> */}

      {/* <ParentTypeScript/> */}

      <Provider store={store}>
         <ReduxReviewParent/>
      </Provider>


    </div>
  );
}

export default App;

