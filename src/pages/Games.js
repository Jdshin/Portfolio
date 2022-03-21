import {Container, Row, Col} from 'react-bootstrap';
import solitaire_img from '../assets/images/solitaire.png';

function Games(props){
    return (
        <Container>
            <Row className="game-row">
                <Col className="game-col">
                    <h4>Solitaire</h4>
                </Col>
                <Col className="game-col" id="game-img-col">
                    <img src={solitaire_img} alt="Solitaire img" id="solitaire_img"/>
                </Col>
                <Col className="game-col">
                    <p>The classic game built with HTML, CSS and Javascript</p>
                </Col>
                <Col className="game-col">
                    <a href="https://jdshin.github.io/Solitaire/">Play Here on Github Pages</a>
                </Col>
            </Row>
        </Container>
    );
};

export default Games;