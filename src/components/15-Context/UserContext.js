// This is step one , creating context
import React from 'react'
// const UserContext = React.createContext();
const UserContext = React.createContext("React"); // provide defalut value when we don't provide it in parent compoent

// every context object bring provider and consumer

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;


// now export both to use

export { UserProvider , UserConsumer } ;


// Note provide in the parent component so that all child can access it