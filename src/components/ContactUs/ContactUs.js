import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const ContactUs = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    async function submitHandler(event) {
        event.preventDefault();

        const contactUser = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value
        };

        try {
            const response = await fetch(
                'https://ecommerce-website-8a8b5-default-rtdb.firebaseio.com/contactus.json', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contactUser) 
                }
            );

            if (!response.ok) {
                throw new Error('Failed to send data!');
            }
            nameRef.current.value = '';
            emailRef.current.value = '';
            phoneRef.current.value = '';
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (
        <Container className="mt-4 d-flex justify-content-center">
            <Form className="w-50" onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" required ref={nameRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required ref={emailRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" ref={phoneRef} />
                </Form.Group>

                <div className="text-center">
                    <Button variant="primary" type="submit">Submit</Button>
                </div>
            </Form>
        </Container>
    );
};

export default ContactUs;
