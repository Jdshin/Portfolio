import { Button, Container, Row, Col } from "react-bootstrap";
import download from '../assets/images/download.png';

function About(props){
    return (
        <Container>
            <Row>
                <Col>
                    <h1>About Me</h1>
                </Col>
            </Row>
            <Row display="flex" className="align-items-center">
                <Col>
                    <div className="resume">
                        <p>For Polymer Engineering Positions</p>
                        <a href="/resume/James_Shin_Chem_Resume" download>
                            <Button variant='outline-secondary'>
                                <span>Download</span>
                            </Button>
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col display="flex" className="align-items-center">
                    <div className="resume">
                        <p>For Web Development Positions</p>
                        <a href="/resume/James_Shin_CompSci_Resume" download>
                            <Button variant='outline-secondary'>
                                <span>Download</span>
                            </Button>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;