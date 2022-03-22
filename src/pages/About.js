import { Button, Container, Row, Col } from "react-bootstrap";
import download from '../assets/images/download.png';

function About(props){
    return (
        <Container className="body-container">
            <Row>
                <Col>
                    <Row className="resume-row">
                        <div>
                            <p>Classically trained in chemistry, I am looking to explore new opportunities in the field of software engineering. </p>
                        </div>
                    </Row>
                </Col>

                <Col>
                    <Row className="resume-row">
                        <div className="resume">
                            <div>
                                <p>For Web Development Positions</p>
                            </div>
                            <a href="/resume/James_Shin_CompSci_Resume" download>
                                <Button variant='outline-secondary'>
                                    <span>Download Resume</span>
                                </Button>
                            </a>
                        </div>
                    </Row>
                    <Row className="resume-row">
                        <Col>
                            <div className="resume">
                                <div>
                                    <p>For Polymer Engineering Positions</p>
                                </div>
                                <a href="/resume/James_Shin_Chem_Resume" download>
                                    <Button variant='outline-secondary'>
                                        <span>Download Resume</span>
                                    </Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default About;