
type OptionalType = {
    name : string,
    age ?: number
} 

function Optional(props : OptionalType) {
    const {age = 18} = props
    return (
        <div>
            <h1>Optional Component</h1>
            {props.name} | {age}
        </div>
    )
}

export default Optional
