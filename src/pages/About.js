import { Button, Container, Row, Col } from "react-bootstrap";
import chem_resume from "../assets/resume/James_Shin_Chem_Resume.pdf";
import cs_resume from "../assets/resume/James_Shin_CompSci_Resume.pdf";

function Resume(props){
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
                            <a href={cs_resume}>
                                <Button variant='outline-secondary'>
                                    Resume
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
                                <a href={chem_resume}>
                                    <Button variant='outline-secondary'>
                                        Resume
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

export default Resume;