import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import './index.css';

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const handletoggle = () => {
    setToggle(!toggle);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary custom-sticky-top">
      <Container>
        <Navbar.Brand href="/">e-Look Up</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handletoggle}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="profile">
              {toggle && <h6>Profile</h6>}
              {!toggle && (
                <FontAwesomeIcon
                  icon={faUser}
                  style={{
                    height: "1.5rem",
                    width: "2rem",
                  }}
                />
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="signin">
              {toggle && <h6>Logout</h6>}
              {!toggle && (
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  style={{
                    height: "1.5rem",
                    width: "2rem",
                  }}
                />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
