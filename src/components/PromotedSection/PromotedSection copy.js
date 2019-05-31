import React from "react"
import PromotedBook from "../PromotedSection/PromotedBook";
import JoinClubSection from "../JoinClubSection/JoinClubSection";


class PromotedSection extends React.Component {

    state = {
        promotedBooks: [
            {
                index: 0,
                id: 1,
                cover: "./images/hb.jpeg",
                titles: "First title",
                caption: "First caption",
                faved: false,
                clicked: false
            },
            {
                index: 1,
                id: 2,
                cover: "./images/ks.jpeg",
                titles: "Second title",
                caption: "Second caption",
                faved: false,
                clicked: false
            },
            {
                index: 2,
                id: 3,
                cover: "./images/yp.jpeg",
                titles: "Third title",
                caption: "Third caption",
                faved: false,
                clicked: false
            },
        ],
        userEmail: "some@email.com",
        userName: "Someone Famous"
    }

    componentDidMount() {
        // !! - WRITE A FETCH FUNCTION TO UPDATE THE STATE WITH ALL OF THE BOOK DATA FROM OUR DB
        // 
    }

    // This function changes the 'clicked' boolean value for the corresponding book in the state object
    onToggleClickStatus = bookid => {
        const { promotedBooks } = this.state;
        const nextBookState = promotedBooks.map(book => {
            if (book.id !== bookid)
                return {
                    ...book,
                    clicked: false
                }
            return {
                ...book,
                clicked: !book.clicked
            }
        })
        this.setState(prevState => ({ promotedBooks: nextBookState }))
    }

    render() {
        // Get a promoted books data from state
        const data = this.state.promotedBooks
        // Generate the three promotedBooks at top of promoted section
        const threePromoted = data.map(book => <PromotedBook
            key={book.id}
            id={book.id}
            cover={book.cover}
            title={book.titles}
            caption={book.caption}
            faved={book.faved}
            clicked={book.clicked}
            // pass the toggler function as a prop
            onToggleClick={this.onToggleClickStatus}
        />)

        // if book is clicked pre-render a matching joinClubSection
        const clickedToJoin = data.map(book => {
            if (book.clicked === true) {
                return (
                    < JoinClubSection
                        key={book.id}
                        id={book.id}
                        cover={book.cover}
                        title={book.titles}
                        caption={book.caption}
                    />
                )
            }
        })
        // displays everything rendered to the screen
        return (
            <div className="container-fluid" id="mainSection" >
                <div className="row" id="cardRow">
                    <div className="col">
                        <div className="card-deck">

                            {threePromoted}
                            {clickedToJoin}

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default PromotedSection