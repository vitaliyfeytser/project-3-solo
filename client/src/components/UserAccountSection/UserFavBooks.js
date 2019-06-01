import React from "react"

import DeleteButton from '../Buttons/DeleteButton'

import ListGroup from 'react-bootstrap/ListGroup'

function UserFavBooks(props) {
    // Get faved books data from the props object
    const data = props

    // Book list item styles
    const listItemStyles = {
        display: "flex",
        alignSelf: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between"
    }
    // Book coverDiv styles
    const coverDivStyles = {
        display: "flex",
        alignItems: "left",
        padding: "none",
        margnin: "none"
    }
    // Book cover styles
    const coverStyles = {
        height: "3em",
        position: "relative",
        right: "2em"
    }
    // Book title container styles
    const titleContainerStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    }
    // Book title styles
    const titleStyles = {
        fontWeight: "bold",
    }
    // Delete Button styles
    const DeleteButtonStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        // alignItems: "flex-start",
    }
    // Generate the favedBooks list
    const favedBooks = data.favedBooks.map(book => <ListGroup.Item
        key={book.id}
        id={book.id}
        action
        variant="light"
    >

        <div
            className="container"
            >
            <div 
            style={listItemStyles}
            className="row">
                <div
                    className="col-1"
                    style={coverDivStyles}
                >
                    <img
                        style={coverStyles}
                        src={book.cover}
                        alt={book.title}
                    />
                </div>
                <div
                    className="col-8"
                    style={titleContainerStyles}
                >
                    <div style={titleStyles}
                    >
                        {book.title}
                    </div>
                    <div>
                        by {book.author}
                    </div>
                </div>
                <div
                    className="col-1"
                    style={DeleteButtonStyles}
                ><DeleteButton />
                </div>
            </div>
        </div>

    </ListGroup.Item>)

    return (
        <ListGroup>
            {favedBooks}
        </ListGroup>
    )
}

export default UserFavBooks
