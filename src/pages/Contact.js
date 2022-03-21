import {Container, Row, Col} from 'react-bootstrap';
import githubLogo from '../assets/images/GitHub-Mark-32px.png';
import linkedinLogo from '../assets/images/In-Blue-34.png';

function Contact(props){
    return (
        <Container>
            <Row>
                <Col>
                    <p>If you have an opportunity that aligns with my skill set, 
                        feel free to get in touch</p>
                </Col>
            </Row>
            <Row>
                <p>Email: jddshin@gmail.com</p>
                <p>Phone: 1-399-364-4034</p>
            </Row>
            <Row>
                <Col className="logo-container">
                    <a href="https://github.com/Jdshin">
                        <img src={githubLogo} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/jddshin/">
                        <img src={linkedinLogo} alt="LinkedIn" id="linkedInLogo"/>
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;