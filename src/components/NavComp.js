import { Container, Nav, Navbar } from "react-bootstrap";

function NavComp(props){
    return (
        <Navbar>
            <Container>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="/academia">Academia</Nav.Link>
                    <Nav.Link href="/games">Games</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
)};

export default NavComp;
