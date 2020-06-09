import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button, Modal} from "react-bootstrap";
import API from "../api";

export const SignUpForm = (props) =>{
    const [emailIn, setEmail] = useState("");
    const [passwordIn, setPassword] = useState("");
    const payload ={
            "email": emailIn,
            "password": passwordIn
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        API.post('/users', payload)
            .then((response => {
                localStorage.setItem('token', response.data.token)
                props.onHide();
            }))
            .catch((errInfo) => {
                alert(errInfo);
            })
    };

    return(
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Sign up form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={emailIn} onChange={e => setEmail(e.target.value)} placeholder="Enter email"/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={passwordIn} onChange={e => setPassword(e.target.value)} placeholder="Enter password"/>
            </Form.Group>
            <Button variant="primary" type="submit">Sign up</Button>
        </Form>
            </Modal.Body>
        </Modal>
    )
};
