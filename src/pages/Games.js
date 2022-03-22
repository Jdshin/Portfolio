import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import solitaire_img from '../assets/images/solitaire.png';

function Games(props){
    return (
        <Container className="game-container">
            <Card style={{width: '18rem'}}>
                <Card.Img id="solitaire_img" variant="top" src={solitaire_img}/>
                <Card.Body>
                    <Card.Title>Solitaire</Card.Title>
                    <Card.Text>The classic game built with HTML, CSS and Javascript</Card.Text>
                    <a href="https://jdshin.github.io/Solitaire/">
                        <Button variant="outline-secondary">Play Here</Button>
                    </a>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Games;