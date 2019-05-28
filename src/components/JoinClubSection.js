import React from "react"

import JoinClubBook from "./JoinClubBook"
import JoinClubForm from "./JoinClubForm"

function JoinClubSection(props) {
  return (

    <div className="container-fluid" id="detailsSection">
      <div className="row">
        <div className="col col-md-2 col-lg-3"></div>
        <div className="col-12 col-md-4 col-lg-3" id="clubDetails">

          <JoinClubBook
            key={props.id}
            id={props.id}
            cover={props.cover}
            title={props.titles}
            caption={props.caption}
          />

        </div>

        <div className="col-12 col-md-4 col-lg-3">

          <JoinClubForm />

        </div>
        <div className="col col-md-2 col-lg-3"></div>
      </div>
    </div>


  )
}

export default JoinClubSection
