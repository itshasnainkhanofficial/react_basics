// // import redux from 'redux'
// const redux = require("redux");
// const createStore = redux.createStore
// const BUY_CAKE = 'BUY_CAKE'

// // action creator is a function create action and return the action
// function buyCake(){
//  return {
//     type: BUY_CAKE,
//     info: 'firt redux action'
// }

// }

// // (previousState, action) => newState

// const initialState = {
//     numOfCake : 10
// }


// // const reducer = (state = initialState , action) => {
// //     switch(action.type){
// //         case BUY_CAKE:
// //             return {
// //                 numOfCake : state.numOfCake - 1
// //             }
// //         default : return state
// //     }

// // }


// // right way is to make a copy of state and change only the required one
// const reducer = (state = initialState , action) => {
//     switch(action.type){
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCake : state.numOfCake - 1
//             }
//         default : return state
//     }

// }

// const store = createStore(reducer)


// console.log("initial state run",store.getState())

// // store.subscribe( () => console.log("subscribed run",store.getState()))
// const unsubscribe = store.subscribe( () => console.log("subscribed run",store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// unsubscribe()
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// console.log("final state run",store.getState())
// console.log("final state run",store.getState())







// more state





// const redux = require("redux");
// const createStore = redux.createStore
// const BUY_CAKE = 'BUY_CAKE'
// const BUY_ICECREAM = 'BUY_ICECREAM'
// // action creator is a function create action and return the action
// function buyCake(){
//  return {
//     type: BUY_CAKE,
//     info: 'firt redux action'
// }
// }
// function buyIcecream(){
//  return {
//     type: BUY_ICECREAM,
// }
// }

// // (previousState, action) => newState

// const initialState = {
//     numOfCake : 10,
//     numOfIceCream : 20
// }



// // right way is to make a copy of state and change only the required one
// const reducer = (state = initialState , action) => {
//     switch(action.type){
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCake : state.numOfCake - 1
//             }
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numOfIceCream : state.numOfIceCream - 1
//             }
//         default : return state
//     }

// }

// const store = createStore(reducer)


// console.log("initial state run",store.getState())

// store.subscribe( () => console.log("subscribed run",store.getState()))
// // const unsubscribe = store.subscribe( () => console.log("subscribed run",store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// // unsubscribe()
// store.dispatch(buyCake())
// store.dispatch(buyIcecream())
// console.log("final state run",store.getState())
// console.log("final state run",store.getState())






// // multiple reducers

// const redux = require("redux");
// const combinedreducer = redux.combineReducers;
// const createStore = redux.createStore
// const BUY_CAKE = 'BUY_CAKE'
// const BUY_ICECREAM = 'BUY_ICECREAM'
// // action creator is a function create action and return the action
// function buyCake(){
//  return {
//     type: BUY_CAKE,
//     info: 'firt redux action'
// }
// }
// function buyIcecream(){
//  return {
//     type: BUY_ICECREAM,
// }
// }

// // (previousState, action) => newState


// const initialCakeState = {
//     numOfCake : 10
// }
// const initialIceCreamState = {
//     numOfIceCream : 20
// }



// const cakereducer = (state = initialCakeState , action) => {
//     switch(action.type){
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCake : state.numOfCake - 1
//             }
//         default : return state
//     }

// }
// const icecreamreducer = (state = initialIceCreamState , action) => {
//     switch(action.type){
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numOfIceCream : state.numOfIceCream - 1
//             }
//         default : return state
//     }

// }



// const rootreducer = combinedreducer({
//     cake : cakereducer,
//     icecream : icecreamreducer
// })
// const store = createStore(rootreducer)


// console.log("initial state run",store.getState())

// // store.subscribe( () => console.log("subscribed run",store.getState()))
// const unsubscribe = store.subscribe( () => console.log("subscribed run",store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// unsubscribe()
// store.dispatch(buyCake())
// store.dispatch(buyIcecream())
// console.log("final state run",store.getState())
// console.log("final state run",store.getState())



// middleware

const redux = require("redux");
const reduxlogger = require("redux-logger");
const logger = reduxlogger.createLogger();
const applymiddleware = redux.applyMiddleware;
const combinedreducer = redux.combineReducers;
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
// action creator is a function create action and return the action
function buyCake(){
 return {
    type: BUY_CAKE,
    info: 'firt redux action'
}
}
function buyIcecream(){
 return {
    type: BUY_ICECREAM,
}
}

// (previousState, action) => newState


const initialCakeState = {
    numOfCake : 10
}
const initialIceCreamState = {
    numOfIceCream : 20
}



const cakereducer = (state = initialCakeState , action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCake : state.numOfCake - 1
            }
        default : return state
    }

}
const icecreamreducer = (state = initialIceCreamState , action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream : state.numOfIceCream - 1
            }
        default : return state
    }

}



const rootreducer = combinedreducer({
    cake : cakereducer,
    icecream : icecreamreducer
})
const store = createStore(rootreducer , applymiddleware(logger))


console.log("initial state run",store.getState())

// store.subscribe( () => console.log("subscribed run",store.getState()))
// const unsubscribe = store.subscribe()
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
// unsubscribe()
store.dispatch(buyCake())
store.dispatch(buyIcecream())
console.log("final state run",store.getState())
console.log("final state run",store.getState())