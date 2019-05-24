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

                            <PromotedBook data={data} />

                            <div className="card" id="book-two" data-promoted-books-id="">
                                <img className="card-img-top promoted-books-at-top" src="./images/ks.jpeg" alt="Kama Sutra" />
                                <div className="card-body promoted-books-at-top">
                                    <h5 className="card-title">KAMA SUTRA FOR BEGINNERS</h5>
                                    <p className="card-text">Will you just look at the cover page? Does it not make you want to read this book
                                      again and again and again? Yes, we feel the same way! Let's meet up and read it together: bring your
                                  kids, your grandkids, even your neighbor - KAMA SUTRA is for everyone!</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Join this book club or fav it for later!</small>
                                    <img className="ml-3 promoted-books-at-top joinClub" src="./images/arrow.png" alt="Join This Book Club!" width="20px"
                                        height="20px" data-toggle="tooltip" data-placement="top" title="Join This Book Club!" />
                                    <img className="ml-3 favorInput" data-book="2" src="./images/heart.png" alt="Fav It For Later!" width="20px"
                                        height="20px" data-toggle="tooltip" data-placement="top" title="Fav It For Later!" />
                                </div>
                            </div>
                            
                            <div className="card" id="book-three" data-promoted-books-id="">
                                <img className="card-img-top promoted-books-at-top" src="./images/yp.jpeg" alt="Card image cap" />
                                <div className="card-body promoted-books-at-top">
                                    <h5 className="card-title">YELLOW PAGES</h5>
                                    <p className="card-text">This book is not for the light of heart... The New Yorker calls it "Riveting!!!", The
                                  Guardian says "If there's one book you read your entire life... this is the one!". Let's meet up and flip from page to page together in search for the meaning of life and winning lottery numbers.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Join this book club or fav it for later!</small>
                                    <img className="ml-3 promoted-books-at-top joinClub" src="./images/arrow.png" alt="Join This Book Club!" width="20px"
                                        height="20px" data-toggle="tooltip" data-placement="top" title="Join This Book Club!" />
                                    <img className="ml-3 favorInput" data-book="3" src="./images/heart.png" alt="Fav It For Later!" width="20px"
                                        height="20px" data-toggle="tooltip" data-placement="top" title="Fav It For Later!" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default PromotedSection