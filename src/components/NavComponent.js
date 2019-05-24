import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

// import './styles/styles.css';
import LoginModal from './LoginModal';


function NavComponent() {

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
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

                    </Nav>
                    <Nav>

                        <NavDropdown className="NavBtns" variant="light" title="User Name" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">You joined X bookclubs.</NavDropdown.Item>
                        </NavDropdown>

                        <LoginModal />

                        <Button
                            className="NavBtns"
                            variant="light"
                            // onClick={''}
                            href="/"
                            // style={{display: "flex" , alignContent: "center"}}
                        >HOME
                        </Button>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );

}

export default NavComponent