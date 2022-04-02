import {Container, Col, Row, Button, Card} from 'react-bootstrap';
import nli_paper from "../assets/papers/jds_nli_paper.pdf";


function Academia(props){
    return (
        <Container className="body-container">
            <Row>
                <h1>Academic Projects</h1>
            </Row>
            <hr className="solid" />
            <Row>
                {/* <a href="public\papers\jds_nli_paper.pdf" download>
                    <Button variant="outline-secondary">
                        Download Paper
                    </Button>
                </a>
                <p>Insert NLP project here</p> */}
                <h4>A Consensus-Powered Approach To Automated Corpus Cleaning</h4>
                <div>
                    <h5 className="bold-underline">Abstract</h5>
                    <p className="abstract">For natural language tasks, AIs are expected to predict relationships between text after training on human-annotated examples. 
                        Using a baseline trained model, and manually re-annotating generated mistakes, an accurate classifer was discovered that can identify examples incorrectly labeled by humans 
                        with greater than 90% accuracy. The classifer was used to automatically prune the training set and created a model with increased ability to identify incorrect examples. </p>
                </div>
                <div>
                    <a href={nli_paper}>
                        <Button variant="outline-secondary">
                            Read Paper
                        </Button>
                    </a>
                </div>
            </Row>
        </Container>
    );
};

export default Academia;