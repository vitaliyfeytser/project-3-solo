import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/styles.css';

import NavComponent from './components/NavComponent/NavComponent'
import SignUpForm from './components/SignInStuff/SignUpForm'
import SignInForm from './components/SignInStuff/SignInForm'
import PromotedSection from './components/PromotedSection/PromotedSection'
import JoinClubSection from './components/JoinClubSection/JoinClubSection'
import UserAccountSection from './components/UserAccountSection/UserAccountSection'


class App extends Component {

  state = {
    promotedBooks: [
      {
        index: 0,
        id: 1,
        cover: "./images/hb.jpeg",
        title: "First title",
        caption: "First caption",
        faved: false,
        clicked: false
      },
      {
        index: 1,
        id: 2,
        cover: "./images/ks.jpeg",
        title: "Second title",
        caption: "Second caption",
        faved: false,
        clicked: false
      },
      {
        index: 2,
        id: 3,
        cover: "./images/yp.jpeg",
        title: "Third title",
        caption: "Third caption",
        faved: false,
        clicked: false
      },
    ],
    favedBooks: [
      {
        id: 1,
        cover: "./images/yp.jpeg",
        title: "First title",
        author: "First author",
      },
      {
        id: 2,
        cover: "./images/ks.jpeg",
        title: "Second title",
        author: "Second author",
      },
      {
        id: 3,
        cover: "./images/hb.jpeg",
        title: "Third title",
        author: "Third author",
      },
      {
        id: 4,
        cover: "./images/yp.jpeg",
        title: "Fourth title",
        author: "Fourth author",
      },
      {
        id: 5,
        cover: "./images/hb.jpeg",
        title: "Fifth title is really long, to check how it would be displayed in a rare case",
        author: "Third author",
      },
      {
        id: 6,
        cover: "./images/yp.jpeg",
        title: "Sixth title",
        author: "Fourth author",
      },
    ],
    userEmail: "some@email.com",
    userName: "Someone Famous",
    activeClubs: [
      {
        id: 1,
        cover: "./images/yp.jpeg",
        title: "First title",
        time: "Someday @ O'clock",
        location: "First title",
        members:
          [
            'Bobbie Joe',
            'Mary Sue',
            'John Smith',
            'Carry Smith',
            'Michael Bolton',
            'Yo Momma',
            'Jesus Himself'
          ]
      },
      {
        id: 2,
        cover: "./images/hb.jpeg",
        title: "Second title",
        time: "Someday @ O'clock",
        location: "Second title",
        members:
          [
            'Bobbie Joe',
            'Mary Sue',
            'John Smith',
            'Carry Smith',
            'Michael Bolton',
            'Yo Momma',
            'Jesus Himself'
          ]
      },
      {
        id: 3,
        cover: "./images/yp.jpeg",
        title: "Third title",
        time: "Someday @ O'clock",
        location: "Third title",
        members:
          [
            'Bobbie Joe',
            'Mary Sue',
            'John Smith',
            'Carry Smith',
            'Michael Bolton',
            'Yo Momma',
            'Jesus Himself'
          ]
      },
      {
        id: 4,
        cover: "./images/ks.jpeg",
        title: "Fourth title",
        time: "Someday @ O'clock",
        location: "Fourth title",
        members:
          [
            'Bobbie Joe',
            'Mary Sue',
            'John Smith',
            'Carry Smith',
            'Michael Bolton',
            'Yo Momma',
            'Jesus Himself'
          ]
      },
    ],
    clubCount: 999,
  }

  componentDidMount() {
    // !! - WRITE A FETCH FUNCTION TO UPDATE THE STATE WITH ALL OF THE BOOK DATA FROM OUR DB
    // 
  }

  // This function changes the 'clicked' boolean value for the corresponding book in the state object
  handleNextBookState = nextState => {
    this.setState(prevState => ({ promotedBooks: nextState }))
  }

  handleClubCount = () => {

  }

  render() {
    return (
      <Router>
        <div>
          <NavComponent activeClubs={this.state.activeClubs} />
          <Switch>

            <Route
              exact
              path="/"
              render={(routeProps) => (
                <PromotedSection
                  {...routeProps}
                  promotedBooks={this.state.promotedBooks}
                  HNBS={this.handleNextBookState}
                />
              )}
            />

            <Route exact path="/join" component={JoinClubSection} />

            {/* <Route exact path="/user" component={UserAccountSection} /> */}
            <Route
              exact
              path="/user"
              render={(routeProps) => (
                <UserAccountSection
                  {...routeProps}
                  activeClubs={this.state.activeClubs}
                  favedBooks={this.state.favedBooks}
                  // HNBS={this.handleNextBookState}
                />
              )}
            />

            <Route exact path="/login" component={SignInForm} />
            <Route exact path="/signUp" component={SignUpForm} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;


// import React from "react"
// import PromotedBook from "../PromotedSection/PromotedBook";
// import JoinClubSection from "../JoinClubSection/JoinClubSection";


// class PromotedSection extends React.Component {



// render() {

//   // displays everything rendered to the screen
//   return (
//     <div className="container-fluid" id="mainSection" >
//       <div className="row" id="cardRow">
//         <div className="col">
//           <div className="card-deck">

//             {threePromoted}
//             {clickedToJoin}

//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }
// }

// export default PromotedSection