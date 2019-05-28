import React from "react"

function DeleteButton(props) {
    return (

        <img
            className="ml-3"
            src="./images/flame.png"
            style={{ float: 'right' }}
            alt="Leave this Club!"
            width="20px"
            height="20px"
            data-toggle="tooltip"
            data-placement="top"
            title="REMOVE From Favorites"
        />

    )
}

export default DeleteButton