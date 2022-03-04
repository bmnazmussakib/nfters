import React from 'react';
import './TopMenu.css';
import './TopMenu.media.css';
import { RiSearch2Line } from "react-icons/ri";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const TopMenu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Brand href="#home" className="top-logo">NFTERS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" className="nav-item">Marketplace</Nav.Link>
                            <Nav.Link href="#pricing" className="nav-item">Resource</Nav.Link>
                            <Nav.Link href="#pricing" className="nav-item">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <div id="custom-search-input">
                                <div class="input-group col-md-12">
                                    <input type="text" class="search-query form-control" placeholder="Search" />
                                    <button class="btn input-group-btn" type="button">
                                        <RiSearch2Line />
                                    </button>
                                </div>
                            </div>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#features" className="top-btn-container1">
                                <button class="upload-btn">
                                    <span>Upload</span>
                                </button>
                            </Nav.Link>
                            <Nav.Link href="#features" className="top-btn-container2">
                                <button class="wallet-btn">
                                    <span>Connect Wallet</span>
                                </button>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>



    );
};

export default TopMenu;