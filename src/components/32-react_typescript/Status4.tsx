
type StatusType = {
    status : 'loading' | "success" | "error"
}

export const Status = (props : StatusType) => {
    const inputmsg = props.status
    let message;
    if(inputmsg === "loading"){
        message = "Data is loading"
    }
    else if (inputmsg === "success"){
        message = "Data has been fetched successfully!"
    }
    else if (inputmsg === "error"){
        message = "Error occured"
    }
    return (
        <>
            <div>
                <h1>Status Component</h1>
                {message}
            </div>
        </>
    )
}