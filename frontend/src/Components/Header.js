import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import "./Header.css";

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navItemStyle = {
    color: 'black',
    fontWeight: 'bold'
  };

  const buttonStyle = {
    backgroundColor: '#3d7e8e'
  };

  return (
    <div>
      <Navbar {...args} expand="md" className="navbar-container">
        <NavbarBrand href="/"><h1 className='Company' style={navItemStyle}>Traverse</h1></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nav-items-container" navbar>
            <NavItem>
              <NavLink href="/AllTours" style={navItemStyle}>Destinations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Gallery" style={navItemStyle}>
              Tour Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/MyBookings" style={navItemStyle}>
              My Bookings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ContactUs" style={navItemStyle}>
              Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <div className="nav-right">
            <Button className="register-button d-none d-sm-block" style={buttonStyle}><NavLink href="/Register">Register</NavLink></Button>
            <div className="d-sm-none text-center" style={{ width: '100%' }}>
              <Button className="register-button" style={buttonStyle}><NavLink href="/Register">Register</NavLink></Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
