import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import {Button, Modal} from "react-bootstrap";
import API from "../api";

export const ReminderPutForm = (props) => {
    const id=props.id;
    let presentationId=0;
    const [reminder, setReminder] = useState([]);
    const [notes, setNotes] = useState("");
    const [enabled, setEnabled] = useState(false);
    const payload = {
        "presentationId": presentationId,
        "notes": notes,
        "enabled": enabled
    };

    useEffect(() => {
        API.get(`/reminders/${id}`, {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
            .then((result) => {
                setReminder(result.data);
                setNotes(result.data.notes)
            })
            .catch((err) => console.error(err))
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        API.put(`/reminders/${id}`, payload, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
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
                <Modal.Title>Reminder update form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Note</Form.Label>
                        <Form.Control type="text" as="textarea" rows="3" value={notes} onChange={e => setNotes(e.target.value)}
                                      placeholder="Enter a note"/>
                    </Form.Group>
                    <Form.Group>
                        {reminder.enabled===true?
                            <Form.Check type="checkbox" label="Enabled" defaultChecked onClick={()=>setEnabled(!enabled)}/>:
                            <Form.Check type="checkbox" label="Enabled" onClick={()=>setEnabled(!enabled)}/>
                        }
                    </Form.Group>
                    <Button variant="primary" type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
};
