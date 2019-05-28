import React from "react"
// import PromotedSection from "./PromotedSection"

class PromotedBook extends React.Component {


    handleClick = e => {
        // console.log("--- prpomoted books props: ", this.props)
        const { id, onToggleClick } = this.props
        // console.log("+++++++ bookid: ", id)
        // console.log("+++++++ onToggleClick: ", onToggleClick)
        onToggleClick(id)
    }

    render() {
        // console.log("--- prpomoted books props: ", this.props)


        return (

            <div
                onClick={this.handleClick}
                className="card"
            >
                <img
                    className="card-img-top promoted-books-at-top"
                    name="cover"
                    src={this.props.cover}
                    alt="Holy Bible"
                />
                <div className="card-body promoted-books-at-top" >
                    <h5
                        className="card-title"
                        name="title"
                    >{this.props.title}
                    </h5>

                    <p
                        className="card-text"
                        name="caption"
                    >{this.props.caption}
                    </p>
                </div>
                <div className="card-footer">
                    <small
                        className="text-muted"
                    >Join this book club or fav it for later!
                </small>
                    <img
                        className="ml-3 promoted-books-at-top joinClub"
                        src="./images/arrow.png"
                        alt="Join This Book Club!"
                        width="20px"
                        height="20px"
                        // data-toggle="tooltip"
                        // data-placement="top"
                        title="Join This Book Club!"
                    />
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
                </div>
            </div>
        )
    }
}

export default PromotedBook