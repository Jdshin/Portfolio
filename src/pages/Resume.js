function Resume(props){
    return (
        <Container>
            <Row>
                <Col>
                    <h1>About Me</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="resume">
                        <div>
                            <p>For Polymer Engineering Positions</p>
                        </div>
                        <a href="/resume/James_Shin_Chem_Resume" download>
                            <Button variant='outline-secondary'>
                                <span>Download</span>
                            </Button>
                        </a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="resume">
                        <div>
                            <p>For Web Development Positions</p>
                        </div>
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

export default Resume;