import React from "react"
// import PromotedSection from "./PromotedSection"

class JoinClubBook extends React.Component {

    render() {
        // console.log("--- prpomoted books props: ", this.props)
        return (

            <div className="card" >
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
                
            </div>
        )
    }
}

export default JoinClubBook