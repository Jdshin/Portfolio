import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavComp(props){

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/about'>Resume</Nav.Link>
                    {/* <Nav.Link as={Link} to='/projects'>Projects</Nav.Link> */}
                    <Nav.Link as={Link} to='/academia'>Academia</Nav.Link>
                    <Nav.Link as={Link} to='/games'>Games</Nav.Link>
                    <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
)};

export default NavComp;
