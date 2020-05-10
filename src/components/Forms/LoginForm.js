import React from "react";
import Form from "react-bootstrap/Form";
import {Button, Modal} from "react-bootstrap";


export const LoginForm=()=>{
    const handleSubmit=()=>{
        console.log("im alive"); //alert jesli nie ma takiego
    };
    const showPassword=()=>{
        let x = document.getElementById("formPassword");
        if (x.type === "password")
            x.type = "text";
        else
            x.type = "password";
    };

    return(
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username"/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Form.Group controlId="formCheckbox">
                <Form.Check type="checkbox" label="Show password" onClick={showPassword}/>
            </Form.Group>
            <Button variant="primary" type="submit">Log in</Button>
        </Form>
    )
};
