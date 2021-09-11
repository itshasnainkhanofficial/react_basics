
type ChildrenType = {
    children : React.ReactNode
}

function ChildReact(props : ChildrenType) {
    return (
        <div>
            <h1>Component As children</h1>
            {props.children}
        </div>
    )
}

export default ChildReact
