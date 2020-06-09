import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button, Modal} from "react-bootstrap";
import API from "../api";

export const ReminderCreateForm = (props) => {
    const presentationId = props.id;
    const [notes, setNotes] = useState("");
    const [enabled, setEnabled] = useState(false);
    const payload = {
        "presentationId": presentationId,
        "notes": notes,
        "enabled": enabled
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        API.post('/reminders', payload, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            .then((response => {
                props.onHide();
            }))
            .catch((errInfo) => {
                alert(errInfo);
            })
    };

    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Reminder form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Note</Form.Label>
                        <Form.Control as="textarea" rows="3" value={notes} onChange={e => setNotes(e.target.value)}
                                      placeholder="Enter a note"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" label="Enabled" onClick={()=>setEnabled(!enabled)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
};
