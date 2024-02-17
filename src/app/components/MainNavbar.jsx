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
                <div className='d-block w-100'>
                    <h2 className='text-center active'>memobouquet.shop</h2>
                    {/* <Navbar.Brand href="#home">
                        <Image src="/logo-transparent.png" alt="memo.bouquet" width={64} height={64} />
                    </Navbar.Brand> */}
                    <div className='nav-menu-line'></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className='navbar-menu active' href="#home">Home</Nav.Link>
                        <Nav.Link className='navbar-menu' href="#link">Catalog</Nav.Link>
                        <Nav.Link className='navbar-menu' href="#link">FAQ</Nav.Link>
                        <Nav.Link className='navbar-menu' href="#link">Order</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}

export default MainNavbar