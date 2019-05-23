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
                            onClick={''}
                        >HOME
                        </Button>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );

    //     <>
    //         <nav className="navbar navbar-dark bg-dark navbar-expand-md">
    //             <div className="container">
    //                 <a className="navbar-brand" href="">
    //                     <img
    //                         src="./images/logo.svg"
    //                         width="48px"
    //                         height="40px"
    //                         alt="Logo"
    //                     />
    //                     <span className="pl-2">COOL KIDS BOOK CLUB</span>
    //                 </a>

    //                 <button
    //                     className="navbar-toggler"
    //                     type="button"
    //                     data-toggle="collapse"
    //                     data-target="#navbarNav"
    //                     aria-controls="navbarNav"
    //                     aria-expanded="false"
    //                     aria-label="Toggle navigation"
    //                 >
    //                     <span className="navbar-toggler-icon"></span>
    //                 </button>

    //                 <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    //                     <div className="navbar-nav ml-auto">

    //                         <LoginModal />

    // <DropdownButton className="NavBtns" variant="light" id="dropdown-basic-button " title="NAME PLACEHOLDER">
    //     <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
    //     <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
    // </DropdownButton>;

    // <Button
    //     className="NavBtns"
    //     variant="light"
    //     onClick={''}
    // >HOME
    // </Button>

    //                     </div>
    //                 </div>
    //             </div>
    //         </nav>
    //     </>
    // );

}

export default NavComponent