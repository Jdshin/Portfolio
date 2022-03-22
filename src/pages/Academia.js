import {Container, Col, Row, Button} from 'react-bootstrap';


function Academia(props){
    return (
        <Container>
            <Row>
                <h4>Academic Projects</h4>
            </Row>
            <Row>
                <a href="public\papers\jds_nli_paper.pdf" download>
                    <Button variant="outline-secondary">
                        Download Paper
                    </Button>
                </a>
                <p>Insert NLP project here</p>
            </Row>
        </Container>
    );
};

export default Academia;