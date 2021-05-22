function Button() { // function or class name should be capital latter
    return (
        <div className="my-2">
            {/* note that there must be only one root element */}
            <button className="bg-red-300 text-white px-5 py-3 rounded-full hover:bg-red-500">Using function component</button>
        </div>
        // the follwing div throw error as parent should be only one
        // <div>

        // </div>
    )
}

export default Button;