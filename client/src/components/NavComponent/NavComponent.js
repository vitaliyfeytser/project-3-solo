import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import LoginModal from '../SignInStuff/LoginModal';
import SignUpModal from '../SignInStuff/SignUpModal';
import MonthNav from '../NavComponent/MonthNav';


class NavComponent extends Component {

    render() {
        console.log("clubCountDiv: ", this.props)
        console.log("promotedMonthToDisplay: ", this.props.state.promotedBookMonthToDisplay)
        const clubCountDiv = <div style={{ display: "flex", flexDirection: "row" }}>You joined <div style={{ fontWeight: "bold", margin: "0em .25em" }}>{this.props.state.activeClubs.length}</div> bookclubs</div>

        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <img
                            src="./images/logo.svg"
                            width="48px"
                            height="40px"
                            alt="Logo"
                        />COOL KIDS BOOK CLUB
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                            <MonthNav
                                month={this.props.state.promotedBookMonthToDisplay}
                                // year={this.props.state.promotedYearToDisplay}
                                handleMonthChange={this.props.handleMonthChange}
                                handleThreePromoted={this.props.handleThreePromoted}
                                viewState={this.props}
                            />

                        </Nav>
                        <Nav>
                            <NavDropdown className="NavBtns" variant="light" title="User Name" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/user">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="/user"
                                >{clubCountDiv}
                                </NavDropdown.Item>
                            </NavDropdown>

                            <SignUpModal />
                            <LoginModal />

                            <Button
                                href="/"
                                className="NavBtns"
                                variant="light"
                            // onClick={''}
                            // style={{display: "flex" , alignContent: "center"}}
                            >HOME
                        </Button>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default NavComponent