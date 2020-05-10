import React from "react";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";

export const SignUpForm = () =>{
    const handleSubmit=()=>{
        console.log("im alive");
    };

    return(
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Button variant="primary" type="submit">Sign up</Button>
        </Form>
    )
};
