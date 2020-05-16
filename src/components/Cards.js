import React, {useEffect, useState} from 'react'
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {ListOfRooms} from "./Lists/ListOfRooms";

export const Cards = (props) => {
    const name = props.name;
    const localization = props.localization;

    return (
        <div class='container'>
            <div class='row'>
                <div class='col-md-4'>
                    <Card>
                        <Card.Body>
                            <Card.Header>{name}</Card.Header>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem> <ListOfRooms localization={localization}/></ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
                <div className='col-md-4'>
                <Card >
                    <Card.Body>
                        <Card.Header>{name}</Card.Header>
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem> <ListOfRooms localization={localization}/></ListGroupItem>
                    </ListGroup>
                </Card>
                </div>
                <div className='col-md-4'>
                <Card >
                    <Card.Body>
                        <Card.Header>{name}</Card.Header>
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem> <ListOfRooms localization={localization}/></ListGroupItem>
                    </ListGroup>
                </Card>
                </div>
            </div>
        </div>
    )
};
