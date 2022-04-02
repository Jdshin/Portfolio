import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import githubLogo from '../assets/images/GitHub-Mark-32px.png';
import linkedinLogo from '../assets/images/In-Blue-34.png';
import React from 'react';
import {useForm, ValidationError} from '@formspree/react';


function Contact(props){

    const [state, handleSubmit] = useForm("mbjwajdj");
    if (state.succeeded){
        return <div className="body-container">Thank you for your inquiry!</div>
    }

    return (
        <Container className="body-container">
            <Row>
                <Col>
                    <p>If you have an opportunity that aligns with my skill set, 
                        feel free to get in touch.</p>
                </Col>
            </Row>
            <Row className="contact-form">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                    <input
                        id="email"
                        type="email" 
                        name="email"
                        placeholder='Email'
                        required
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <Button variant="outline-secondary" type="submit" disabled={state.submitting}>
                        Submit
                    </Button>
                </form>
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