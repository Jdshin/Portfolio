import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import githubLogo from '../assets/images/GitHub-Mark-32px.png';
import linkedinLogo from '../assets/images/In-Blue-34.png';
import {useState} from 'react';

function Contact(props){

    const [contactForm, setContactForm] = useState(0);



    return (
        <Container className="body-container">
            <Row>
                <Col>
                    <p>If you have an opportunity that aligns with my skill set, 
                        feel free to get in touch.</p>
                </Col>
            </Row>
            <Row className="contact-form">
                <Form>
                    <Form.Control type="text" placeholder="Name"/>
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Control as="textarea" rows={3} placeholder="Message" />
                    <Button variant="outline-secondary">Submit</Button>
                </Form>
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