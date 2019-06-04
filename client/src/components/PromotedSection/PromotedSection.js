import React from "react"
import PromotedBook from "../PromotedSection/PromotedBook";
import JoinClubSection from "../JoinClubSection/JoinClubSection";


class PromotedSection extends React.Component {

    // This function changes the 'clicked' boolean value for the corresponding book in the state object
    onToggleClickStatus = bookid => {
        const { displayThreePromoted } = this.props;
        const nextBookState = displayThreePromoted.map(book => {
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
        this.props.HNBS(nextBookState)
    }

    // Updates user's active-Club count in the Nav dropdown
    clubCount = () => {

    }

    render() {
        // Get promoted books data from the props object
        const data = this.props.displayThreePromoted
        console.log("data", data)
        // Generate the three displayThreePromoted at top of promoted section
        const threePromoted = data.map(book => <PromotedBook
            key={book.id}
            id={book.id}
            cover={book.cover}
            title={book.title}
            caption={book.caption}
            faved={book.faved}
            clicked={book.clicked}
            // pass the toggler function as a prop
            onToggleClick={this.onToggleClickStatus}
        />)

        // If book is clicked pre-render a matching joinClubSection
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
        // Returns everything rendered
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