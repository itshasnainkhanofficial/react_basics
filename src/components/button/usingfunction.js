function Button() { // function or class name should be capital latter
    return (
        <div>
            {/* note that there must be only one root element */}
            <button className="bg-red-300">Using func</button>
        </div>
    )
}

export default Button;