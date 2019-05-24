import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/styles.css';

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Button from 'react-bootstrap/Button';

import NavComponent from './components/NavComponent'
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'
import PromotedSection from './components/PromotedSection'
import JoinClubSection from './components/JoinClubSection'
import UserAccountSection from './components/UserAccountSection'


function App() {
  return (
    <Router>
      <div>
        <NavComponent />
        <Switch>

          <Route exact path="/" component={PromotedSection} />
          <Route exact path="/user" component={UserAccountSection} />
          <Route exact path="/login" component={SignInForm} />
          <Route exact path="/signUp" component={SignUpForm} />

        </Switch>
      </div>
    </Router>

    // <div className="App">

    //   <NavComponent />
    //   <SignUpForm />
    //   <SignInForm />
    //   <PromotedSection />
    //   <JoinClubSection />
    //   <UserAccountSection />

    // </div>
  );
}

export default App;
