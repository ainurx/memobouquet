'use client'
import React from 'react'
import Image from 'next/image';

// External dep
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNavbar(){
    return(
        <Navbar expand="lg" className="m-bg-primary">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src="/logo-transparent.png" alt="memo.bouquet" width={64} height={64} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Catalog</Nav.Link>
                    <Nav.Link href="#link">FAQ</Nav.Link>
                    <Nav.Link href="#link">Order</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNavbar