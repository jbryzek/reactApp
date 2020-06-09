import React from 'react'
import {Card} from "react-bootstrap";
import {ListOfRooms} from "./Lists/ListOfRooms";
import {Presentations} from "./Lists/Presentations";

export const Cards = (props) => {
    const name = props.name;
    const localization = props.localization;
    const day = props.day;
    const session = props.session;
    const shortName = props.shortName;

    return (
        <Card>
            <Card.Header as="h5" style={{fontWeight: 'bold'}}>{name}</Card.Header>
            <Card.Body>
                <Card.Title><ListOfRooms localization={localization}/></Card.Title>
                <Card.Text> <Presentations day={day} shortName={shortName} session={session}/></Card.Text>
            </Card.Body>
        </Card>
    )
};
