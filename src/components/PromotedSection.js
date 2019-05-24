import React from "react"
import PromotedBook from "./PromotedBook";


class PromotedSection extends React.Component {

    state = {
        covers: ["./images/hb.jpeg", "./images/ks.jpeg", "./images/yp.jpeg"],
        titles: ["First title", "Second title", "Third title"],
        captions: ["First caption", "Second caption", "Third caption"],
        faved: true,
        clicked: false
    }

    render() {
        const data = this.state
        console.log("---PromSECTION STATE: ", this.state)
        
        return (
            <div className="container-fluid" id="mainSection">
                <div className="row" id="cardRow">
                    <div className="col">
                        <div className="card-deck">

                            <PromotedBook
                                cover={data.covers[0]}
                                title={data.titles[0]}
                                caption={data.captions[0]}
                            />

                            <PromotedBook
                                cover={data.covers[1]}
                                title={data.titles[1]}
                                caption={data.captions[1]}
                            />

                            <PromotedBook
                                cover={data.covers[2]}
                                title={data.titles[2]}
                                caption={data.captions[2]}
                            />

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default PromotedSection