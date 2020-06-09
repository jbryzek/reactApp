import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button, Modal} from "react-bootstrap";
import API from "../api";
import { useHistory} from "react-router-dom";


export const LoginForm=()=>{
    const [emailIn, setEmail] = useState("");
    const [passwordIn, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit= () =>{
        API.post('/auth', {}, {
            auth: {
                username: emailIn,
                password: passwordIn
            }
        })
            .then((response => {
                localStorage.setItem('token',response.data.token);
                history.push("/reminders")
            }))
            .catch((errInfo) => {
                alert(errInfo);
            })
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
                <Form.Control type="username" value={emailIn} onChange={e => setEmail(e.target.value)} placeholder="Enter username"/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={passwordIn} onChange={e => setPassword(e.target.value)} placeholder="Enter password"/>
            </Form.Group>
            <Form.Group controlId="formCheckbox">
                <Form.Check type="checkbox" label="Show password" onClick={showPassword}/>
            </Form.Group>
            <Button variant="primary" type="submit">Log in</Button>
        </Form>
    )
};
