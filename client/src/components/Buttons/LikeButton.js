import React from "react"

function LikeButton(props) {
    return (

        <img
            className="ml-3 favorInput"
            data-book="1"
            src="./images/heart.png"
            alt="Fav It For Later!"
            width="20px"
            height="20px"
            // data-toggle="tooltip"
            // data-placement="top"
            title="Fav It For Later!"
        />

    )
}

export default LikeButton