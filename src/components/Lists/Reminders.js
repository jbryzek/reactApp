import React, {useEffect, useState} from "react";
import API from '../api'
import {BsFilePlus} from "react-icons/all";
import {Button, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const Reminders = () => {
    const [reminders, setReminders] = useState([]);

    const [showReminder, setShowReminder] = useState(false);
    const handleCloseReminder = () => setShowReminder(false);
    const handleShowReminder = () => setShowReminder(true);
    const [presentationId, setPresentationId] = useState("");
    const [notes, setNotes] = useState("");
    const [enabled, setEnabled] = useState(false);
    const payload ={
        "presentationId": presentationId,
        "notes": notes,
        "enabled": false
    };

    useEffect(() => {
        API.get('/reminders')
            .then((result) => setReminders(result.data))
            .catch((err) => console.error(err))
    }, []);

    const handleSubmit=()=>{
        API.post('/reminders', payload)
            // .then((result) => setReminders(result.data))
            .catch((errInfo) => {
                console.log('error')
            })
    };

    const handleDelete = (id) => {
        API.delete(`/reminders/${id}`)
            .catch((error) => console.error(error));
    };

    const createReminder=()=>{
        handleShowReminder()
    };

    return (
        <>
            <BsFilePlus size='4em' onClick={createReminder}></BsFilePlus>
            {reminders.length>0? <span>sth</span>
            :
                <span>nothing</span>}

            {/*<Modal show={showReminder} onHide={handleCloseReminder}>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Reminder form</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        <Form noValidate onSubmit={handleSubmit}>*/}
            {/*            <Form.Group controlId="formPresId">*/}
            {/*                <Form.Label>Id</Form.Label>*/}
            {/*                <Form.Control type="id" value={presentationId} onChange={e => setPresentationId(e.target.value)} placeholder="Enter id"/>*/}
            {/*            </Form.Group>*/}
            {/*            <Form.Group controlId="formNotes">*/}
            {/*                <Form.Label>Notes</Form.Label>*/}
            {/*                <Form.Control type="notes" value={notes} onChange={e => setNotes(e.target.value)} placeholder="Enter notes"/>*/}
            {/*            </Form.Group>*/}
            {/*            <Form.Group controlId="formCheckbox">*/}
            {/*                <Form.Check type="checkbox" label="Enable" onClick={setEnabled(!enabled)}/>*/}
            {/*            </Form.Group>*/}
            {/*            <Button variant="primary" type="submit">Create</Button>*/}
            {/*        </Form>*/}
            {/*    </Modal.Body>*/}
            {/*</Modal>*/}
        </>
    )
};
