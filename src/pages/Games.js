import {Container, Card, Button} from 'react-bootstrap';
import solitaire_img from '../assets/images/solitaire2.png';
import sudoku_img from '../assets/images/sudoku.jpg';

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
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={sudoku_img}/>
                <Card.Body>
                    <Card.Title>Sudoku</Card.Title>
                    <Card.Text>Being built with React and Javascript</Card.Text>
                    {/* <a href="https://jdshin.github.io/Sudoku/"> */}
                        <Button variant="outline-secondary" disabled>Under construction</Button>
                    {/* </a> */}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Games;