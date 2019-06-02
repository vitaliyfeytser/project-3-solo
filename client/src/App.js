import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/styles.css';

import NavComponent from './components/NavComponent/NavComponent'
import SignUpForm from './components/SignInStuff/SignUpForm'
import SignInForm from './components/SignInStuff/SignInForm'
import PromotedSection from './components/PromotedSection/PromotedSection'
import JoinClubSection from './components/JoinClubSection/JoinClubSection'
import UserAccountSection from './components/UserAccountSection/UserAccountSection'
import API from './utils/API';

const moment = require("moment");
moment().format();

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
    promotedBookMonthToDisplay: "06-05-2019",
    // promotedMonthToDisplay: moment(new Date()).format("MM"),
    // promotedYearToDisplay: moment(new Date()).format("YYYY"),
    // handleMonthChange: this.handleMonthChange

  }


  componentDidMount() {
    // console.log(this.state.promotedMonthToDisplay)
    // console.log(this.state.promotedYearToDisplay)
    // This API call gets all of the promoted books from the database


    API.getPromotedBooks()
      .then(res => {
        console.log("res.data", res.data)
        // This array holds all properly formatted promotedBooks objects for state
        let resData = []

        for (let i = 0; i < res.data.length; i++) {
          let promoted = {
            index: res.data[i].id - 1,
            id: res.data[i].id,
            cover: res.data[i].coverImage,
            title: res.data[i].title,
            caption: res.data[i].caption,
            monthPromoted: res.data[i].monthAndYearPromoted,
            // monthPromoted: res.data[i].monthAndYearPromoted.slice(0, 2),
            // yearPromoted: res.data[i].monthAndYearPromoted.slice(3, 7),
            faved: false,
            clicked: false
          }
          resData.push(promoted)
        }
        console.log("resData", resData)

        this.setState({
          promotedBooks: resData,
        });
      });
    // Adjust prop data sent to PromotedSection component to only contain the three book objects corresponding to monthToDisplya const

  }


  // This function changes the 'clicked' boolean value for the corresponding book in the state object
  handleNextBookState = nextState => {
    this.setState(prevState => ({ promotedBooks: nextState }))
  }

  handleClubCount = () => {

  }

  handleMonthChange = () => {
    console.log("before: ", this.state.promotedBookMonthToDisplay)

    let month = moment(this.state.promotedBookMonthToDisplay).subtract(1, 'month').format('MM-DD-YYYY')

    this.setState(prevState => ({
      promotedMonthToDisplay: month,
      // promotedYearToDisplay: year
    }))

    console.log("after: ", this.state.promotedBookMonthToDisplay)
  }


  render() {

    // console.log("handleMonthChange: ", this.handleMonthChange)

    return (
      <Router>
        <div>
          <NavComponent
            state={this.state}
            handleMonthChange={this.handleMonthChange}
          />
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
