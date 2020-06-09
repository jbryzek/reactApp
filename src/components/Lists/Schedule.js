import React, {useEffect, useState} from 'react'
import API from "../api";
import {useLocation} from 'react-router-dom';
import queryString from 'query-string'
import {Sessions} from "./Sessions";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export const Schedule = (props) => {
    const [schedule, setSchedule] = useState(null);
    const [day, setDay] = useState('');
    const location = useLocation();

    useEffect(() => {
        const query = queryString.parse(location.search);
        setDay(query.day);
        API.get(`/schedules?day=${query.day}`)
            .then((result) => {
                setSchedule(result.data[0][query.day.toUpperCase()]);
            })
            .catch((err) => console.error(err))
    }, [location]);


    return (
        <Container>
            <Row>
                {schedule?.map(session => session.sessions.map(s => <Col key={day + s} sm={6} lg={4}> <Sessions
                                                                                           sessionName={s}
                                                                                           sessionDay={session.start.substring(0, 10)}> </Sessions>
                    </Col>)
                )}
            </Row>
        </Container>
    )
};
