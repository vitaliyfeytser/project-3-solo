import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/styles.css';

import NavComponent from './components/NavComponent/NavComponent'
import SignUpForm from './components/SignInStuff/SignUpForm'
import SignInForm from './components/SignInStuff/SignInForm'
import PromotedSection from './components/PromotedSection/PromotedSection'
import JoinClubSection from './components/JoinClubSection/JoinClubSection'
import UserAccountSection from './components/UserAccountSection/UserAccountSection'


function App() {
  return (
    <Router>
      <div>
        <NavComponent />
        <Switch>

          <Route exact path="/" component={PromotedSection} />
          <Route exact path="/join" component={JoinClubSection} />
          <Route exact path="/user" component={UserAccountSection} />
          <Route exact path="/login" component={SignInForm} />
          <Route exact path="/signUp" component={SignUpForm} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
