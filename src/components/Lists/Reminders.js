import React, {useEffect, useState} from "react";
import API from '../api'
import {Card} from "react-bootstrap";
import {PresentationsTitle} from "./Presentations";
import {BsInfoSquare, BsTools, BsTrash} from "react-icons/all";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {ReminderPutForm} from "../Forms/ReminderPutForm";
import {ReminderForm} from "../Forms/ReminderForm";

export const Reminders = () => {
    const [reminders, setReminders] = useState([]);
    const [reminderUpdate, setReminderUpdate] = useState(false);
    const [showReminder, setShowReminder] = useState(false);

    useEffect(() => {
        API.get('/reminders', {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
            .then((result) => setReminders(result.data))
            .catch((err) => console.error(err))
    }, []);

    const handleDelete = (id) => {
        API.delete(`/reminders/${id}`, {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
            .then(console.log('deleted'))
            .catch((errInfo) => alert(errInfo));
        window.location.reload();
    };

    return (
        <Container>
            <Row>
            {reminders.map(reminder=>
                <Col key={reminder.id} sm={6} lg={4}>
                <Card>
                    <Card.Header as="h5" style={{fontWeight: 'bold'}}>
                        <PresentationsTitle id={reminder.presentationId}/> <BsTools onClick={()=>setReminderUpdate(true)}/> <BsInfoSquare onClick={()=>setShowReminder(true)}/> <BsTrash onClick={()=>handleDelete(reminder.id)}/>

                    </Card.Header>
                    <Card.Body>
                        Created at: {reminder.updatedAt.substring(11,16)} {reminder.updatedAt.substring(0,10)} <br/> Enabled: {reminder.enabled.toString()}
                    </Card.Body>
                </Card>
                    <ReminderPutForm show={reminderUpdate} onHide={() => setReminderUpdate(false)} id={reminder.id} ischecked={reminder.enabled.toString()}/>
                    <ReminderForm show={showReminder} onHide={() => setShowReminder(false)} id={reminder.id} ischecked={reminder.enabled.toString()}/>
                </Col>
            )}
            </Row>
        </Container>
    )
};
