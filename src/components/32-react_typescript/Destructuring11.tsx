
type DestructureType = {
    name : string,
    fname : string
}
function Destructuring({name , fname} : DestructureType) {
    return (
        <div>
            <h1>Destructure Component</h1>
            <div>
                Name: {name} | Father's Name: {fname}
            </div>
        </div>
    )
}

export default Destructuring
