

type GreetType = {
    name : string,
    message : number,
    isLoggedIn : boolean
}

export const Greet = (props : GreetType) => {
    return (
        <>
        <h1>Greet component</h1>

         <span>{props.isLoggedIn ? "Admin" : "Guest"}</span>
        <h1>Hello {props.name} you have {props.message } messages</h1>
        </>
    )
}

