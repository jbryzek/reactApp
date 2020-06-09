import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button, Modal} from "react-bootstrap";
import API from "../api";


export const LoginForm = (props) => {
    const [emailIn, setEmail] = useState("");
    const [passwordIn, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        API.post('/auth', {}, {
            auth: {
                username: emailIn,
                password: passwordIn
            }
        })
            .then((response => {
                localStorage.setItem('token', response.data.token);
                props.onHide();
            }))
            .catch((errInfo) => {
                alert(errInfo);
            })
    };

    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Log in form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" value={emailIn} onChange={e => setEmail(e.target.value)}
                                      placeholder="Enter username"/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={(showPassword)? "text":"password"} value={passwordIn} onChange={e => setPassword(e.target.value)}
                                      placeholder="Enter password"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" label="Show password" onClick={()=>setShowPassword(!showPassword)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Log in</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
};
