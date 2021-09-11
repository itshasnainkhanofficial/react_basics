type HeadingType = {
    children : string
}
function Heading(props : HeadingType) {
    return (
        <div>
            <h1>Heading component</h1>
            {props.children}
        </div>
    )
}

export default Heading
