import React from "react"
import PromotedBook from "./PromotedBook";
import JoinClubSection from "./JoinClubSection";
import FavedButton from "./FavedButton";


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
        ]
    }

    componentDidMount() {
        // !! - WRITE A FETCH FUNCTION TO UPDATE THE STATE WITH ALL OF THE BOOK DATA FROM OUR DB
        // 
    }

    onToggleClickStatus = bookid => {
        const { promotedBooks } = this.state;
        // console.log('TOGGLE - STATE: ', this.state)
        // console.log('TOGGLE - BOOKS: ', promotedBooks)
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
        console.log("NEXTBookState:", nextBookState)
        this.setState(prevState => ({ promotedBooks: nextBookState }))
    }


    render() {
        // console.log("---PromSECTION STATE: ", this.state)

        const data = this.state.promotedBooks
        const threePromoted = data.map(book => <PromotedBook
            key={book.id}
            id={book.id}
            cover={book.cover}
            title={book.titles}
            caption={book.caption}
            faved={book.faved}
            clicked={book.clicked}
            onToggleClick={this.onToggleClickStatus}
        />)

        // if book is clicked
        // render joinClubSection
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

        // console.log("---PromSECTION PROPS: ", this.props)
        console.log("---PromSECTION STATE END: ", this.state)

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