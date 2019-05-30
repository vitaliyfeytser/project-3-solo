import React from "react"

function FavedButton(props) {
    return (

        <img
            className="ml-3"
            src="./images/check.png"
            alt="You're A Member Of This Book Club"
            width="20px"
            height="20px"
            data-toggle="tooltip"
            data-placement="top"
            title="You're A Member Of This Book Club!"
        />
    )
}

export default FavedButton