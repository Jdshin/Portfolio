import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { NavLink, NavItem } from "react-bootstrap";

function NavComp(props){

    return (
        <Navbar>
            <Container>
                <Nav>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
                    <Nav.Link as={Link} to='/academia'>Academia</Nav.Link>
                    <Nav.Link as={Link} to='/games'>Games</Nav.Link>
                    <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
)};

export default NavComp;
