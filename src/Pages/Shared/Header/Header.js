import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import logo1 from "../../../assets/logo192.png";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to="/" className="text-decoration-none text-dark">
            <img style={{ width: "30px" }} src={logo1} alt="" /> Learning Hub
          </Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              {" "}
              <Link to="/" className="text-decoration-none text-dark">
                Courses
              </Link>{" "}
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/faq" className="text-decoration-none text-dark">
                FAQ
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              {" "}
              <Link to="/blog" className="text-decoration-none text-dark">
                Blog
              </Link>{" "}
            </Nav.Link>
            <Nav.Link href="#pricing">Theme dark / light</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <button onClick={handleLogOut} className="ms-2">
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link className="text-decoration-none me-2" to="/login">
                    Login
                  </Link>
                  <Link className="text-decoration-none me-2" to="/register">
                    Register
                  </Link>
                </>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <div>
                  <div data-for="tool" data-tip={user?.displayName}>
                    <Image
                      style={{ height: "30px" }}
                      roundedCircle
                      src={user.photoURL}
                    ></Image>
                  </div>
                  <ReactTooltip place="right" id="tool"></ReactTooltip>
                </div>
              ) : (
                <FaUserAlt />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
