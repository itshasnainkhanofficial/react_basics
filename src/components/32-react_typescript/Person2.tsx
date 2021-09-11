
type PersonType = {
    name : {
        first: string,
        last : string
    }
}
export const Person = (props : PersonType) => {
    return (
        <>
        <h1>Person component</h1>

        <h1> {props.name.first} {props.name.last}</h1>
        </>
    )
}