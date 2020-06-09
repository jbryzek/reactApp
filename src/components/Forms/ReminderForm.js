import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import {Modal} from "react-bootstrap";
import API from "../api";

export const ReminderForm = (props) => {
    const id = props.id;
    const [reminder, setReminder] = useState([]);

    useEffect(() => {
        API.get(`/reminders/${id}`, {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
            .then((result) => {
                setReminder(result.data);
            })
            .catch((err) => console.error(err))
    }, [id]);

    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Reminder form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate>
                    <Form.Group>
                        <Form.Label>Created at</Form.Label>
                        <Form.Control type="text" defaultValue={reminder.createdAt}
                                      readOnly />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Note</Form.Label>
                        <Form.Control type="text"   as="textarea" rows="3" defaultValue={reminder.notes}
                                      readOnly />
                    </Form.Group>
                    <Form.Group>
                        {reminder.enabled===true?
                            <Form.Check type="checkbox" label="Enabled" disabled checked />:
                            <Form.Check type="checkbox" label="Enabled" disabled/>
                        }
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
};
