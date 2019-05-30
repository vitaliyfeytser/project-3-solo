import React from "react"

import DeleteButton from '../Buttons/DeleteButton'

import ListGroup from 'react-bootstrap/ListGroup'

function UserFavBooks(props) {
    return (

        <ListGroup>
            
            <ListGroup.Item
                action
                variant="light"
                >Awesome book 1
            <DeleteButton />
            </ListGroup.Item>

            <ListGroup.Item
                action
                variant="light"
                >Awesome book 2
            <DeleteButton />
            </ListGroup.Item>

            <ListGroup.Item
                action
                variant="light"
                >Awesome book 3
            <DeleteButton />
            </ListGroup.Item>

            <ListGroup.Item
                action
                variant="light"
                >Awesome book 4
            <DeleteButton />
            </ListGroup.Item>

        </ListGroup>


    )
}

export default UserFavBooks
