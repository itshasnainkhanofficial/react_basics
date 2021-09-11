type NameList = {
    name : {
        id : number,
        name : string
    }[]
}
export const PersonList = (props : NameList) => {
    return (
        <>
        <h1>Person list component</h1>
        <span>
            {
                props.name.map( person => {
                    return (
                        <div key={person.id}>
                            <div>
                                id : {person.id}
                            </div>
                            <div>
                                name : {person.name}
                            </div>

                        </div>
                    )
                })
            }
        </span>
        </>
    )
}