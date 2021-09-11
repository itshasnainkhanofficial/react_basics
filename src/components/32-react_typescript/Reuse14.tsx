
export type stdidname = {
    id : number,
    name : string
}

export type stdType = {
    identity : stdidname[]
}

function Reuse(props : stdType) {
    return (
        <div>
            <h1>Reuse Component</h1>
            {
                props.identity.map(person => {
                    return (
                        <div key={person.id}>
                            id: {person.id} | name: {person.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Reuse
