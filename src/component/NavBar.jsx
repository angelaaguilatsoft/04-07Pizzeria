import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import lockOpen from '../assets/imgs/lockOpen.png';
import lock from '../assets/imgs/lock.png';
import PizzaTrozo from '../assets/imgs/PizzaTrozo.png';
import carroCompra from '../assets/imgs/carroCompra.png';
import { Link } from "react-router-dom";


const NavBar = () => {
    const total = 25000;
    const token = true;
    const precioTotal = Intl.NumberFormat("de-DE").format(total)

    return (
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand className="text-white">
            Pizzeria Mamma Mia!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Button variant="outline-light" className="text-white">
                <Image src={PizzaTrozo} />
                <Link to="/" className="text-white ms-3 text-decoration-none">
                  Home
                </Link>
              </Button>{" "}
              <Button variant="outline-light" className="text-white">
                <Image src={token ? lockOpen : lock} />
                {token ? (
                  <Link
                    to="/Profile"
                    className="text-white ms-3 text-decoration-none"
                  >
                    Profile
                  </Link>
                ) : (
                  <Link
                    to="/Register"
                    className="text-white ms-3 text-decoration-none"
                  >
                    Register
                  </Link>
                )}
              </Button>
              <Button variant="outline-light" className="text-white">
                <Image src={token ? lockOpen : lock} />{" "}
                {token ? (
                  <Link to="/" className="text-white ms-3 text-decoration-none">Logout</Link>
                ) : (
                  <Link
                    to="/Login"
                    className="text-white ms-3 text-decoration-none"
                  >
                    Login
                  </Link>
                )}
              </Button>
            </Nav>

            <Link to="/Cart" className="text-white ms-3 text-decoration-none">
              <Form className="d-flex align-items-center">
                <Button variant="outline-light" className="text-primary">
                  <Image src={carroCompra} /> Total: ${precioTotal}
                </Button>
              </Form>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;