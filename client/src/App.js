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
        monthPromoted: "06-05-2019",
        faved: false,
        clicked: false
      },
      {
        index: 1,
        id: 2,
        cover: "./images/ks.jpeg",
        title: "Second title",
        caption: "Second caption",
        monthPromoted: "06-05-2019",
        faved: false,
        clicked: false
      },
      {
        index: 2,
        id: 3,
        cover: "./images/yp.jpeg",
        title: "Third title",
        caption: "Third caption",
        monthPromoted: "06-05-2019",
        faved: false,
        clicked: false
      }
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
    promotedBookMonthToDisplay: "06-01-2019",
    displayThreePromoted: [
      {
        index: 0,
        id: 1,
        cover: "./images/hb.jpeg",
        title: "First title",
        caption: "First caption",
        monthPromoted: "06-05-2019",
        faved: false,
        clicked: false
      },
      {
        index: 1,
        id: 2,
        cover: "./images/ks.jpeg",
        title: "Second title",
        caption: "Second caption",
        monthPromoted: "06-05-2019",
        faved: false,
        clicked: false
      },
      {
        index: 2,
        id: 3,
        cover: "./images/yp.jpeg",
        title: "Third title",
        caption: "Third caption",
        monthPromoted: "06-05-2019",
        faved: false,
        clicked: false
      }
    ]
  }

  componentDidMount() {
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

        this.handleThreePromoted()
      });
    // Adjust prop data sent to PromotedSection component to only contain the three book objects corresponding to monthToDisplya const

  }

  viewThreePromoted = []

  handleThreePromoted = () => {
    // take promotedBookMonthToDisplay state
    // filter through promotedBooks for this date
    // set seperate state view branch and pass as prop

    for (let i = 0; i < this.state.promotedBooks.length; i++) {
      this.state.promotedBooks[i].monthPromoted === this.state.promotedBookMonthToDisplay ? this.viewThreePromoted.push(this.state.promotedBooks[i]) : console.log("not promoted")

      // console.log("------this.state.promotedBooks[i].monthPromoted", this.state.promotedBooks[i].monthPromoted)
      // console.log("------this.state.promotedBookMonthToDisplay", this.state.promotedBookMonthToDisplay)
      // console.log("------this.viewThreePromoted", this.viewThreePromoted)
    }
    this.setState({
      displayThreePromoted: this.viewThreePromoted,
    });
    this.viewThreePromoted = []
  }

  // This function changes the 'clicked' boolean value for the corresponding book in the state object
  handleNextBookState = nextState => {
    this.setState(prevState => ({ displayThreePromoted: nextState }))
  }

  // This function sets the month to display in promotedSection component
  handleMonthChange = (arg) => {
    // let monthNav = arg
    let month

    if (arg === "prev") {
      month = moment(this.state.promotedBookMonthToDisplay).subtract(1, 'month').format('MM-DD-YYYY')
      console.log("-----prev")
    }
    else if (arg === "now") {
      let date = new Date(), y = date.getFullYear(), m = date.getMonth()
      let firstDay = new Date(y, m, 1)
      month = moment(firstDay).format('MM-DD-YYYY')
      // month = moment().startOf('month').format('MM-DD-YYYY');
      console.log("-----month", month)
      console.log("-----now")
    }
    else if (arg === "next") {
      month = moment(this.state.promotedBookMonthToDisplay).add(1, 'month').format('MM-DD-YYYY')
      console.log("-----next")
    }
    this.setState({
      promotedBookMonthToDisplay: month,
    }, this.handleThreePromoted)

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
            handleThreePromoted={this.handleThreePromoted}
          />
          <Switch>

            <Route
              exact
              path="/"
              render={(routeProps) => (
                <PromotedSection
                  {...routeProps}
                  displayThreePromoted={this.state.displayThreePromoted}
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
