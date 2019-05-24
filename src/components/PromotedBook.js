import React from "react"

function PromotedBook(props) {


    console.log("--- prpomoted books props: ", props)
    return (

        <div
            className="card"
            id="book-one"
            data-promoted-books-id=""
        >
            <img
                className="card-img-top promoted-books-at-top"
                name="cover"
                src={props.data.covers[2]}
                alt="Holy Bible"
            />
            <div
                className="card-body promoted-books-at-top"
            >
                <h5
                    className="card-title"
                    name="title"
                >THE ACTION BIBLE
                </h5>

                <p
                    className="card-text"
                    name="caption"
                >Finally! From the authors who brought you the "HOLY BIBLE", "SANTA CLAUSE AND RUDOLPH", "GHOSTS ARE REAL, NO - I'M SERIOUS!" comes a story of the Bible Heroes and Devotion! Let's meet up and together color Moses with your favorite set of crayons!
                </p>
            </div>
            <div className="card-footer">
                <small
                    lassName="text-muted"
                >Join this book club or fav it for later!
                </small>
                <img
                    className="ml-3 promoted-books-at-top joinClub"
                    src="./images/arrow.png"
                    alt="Join This Book Club!"
                    width="20px"

                    height="20px"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Join This Book Club!"
                />
                <img
                    className="ml-3 favorInput"
                    data-book="1"
                    src="./images/heart.png"
                    alt="Fav It For Later!"
                    width="20px"

                    height="20px"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Fav It For Later!"
                />
            </div>
        </div>
    )
}

export default PromotedBook