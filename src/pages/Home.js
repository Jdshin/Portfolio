import {Container} from 'react-bootstrap';
import headshot from '../assets/images/headshot.jpg';

function Home(props){
    return (
        <Container className="body-container">
            <div className="opener">
                <div>
                    <img src={headshot} className="headshot" alt="headshot" />
                </div>
                <div>
                    <h1>Hello, I'm James Shin. <br></br> I'm a full-stack web developer.</h1>
                </div>
            </div>
        </Container>
    );
};

export default Home;