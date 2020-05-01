import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function ContactForm () {
  return (
    <Container>
      <Form>
  <Form.Group controlId="formGroupName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="First and Last Name" />
  </Form.Group>      
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  
</Form>
    </Container>

  )
}

export default ContactForm;