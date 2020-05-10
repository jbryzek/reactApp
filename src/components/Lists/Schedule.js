import React, {useEffect, useState} from 'react'
import API from "../api";
import {
    useParams
} from "react-router-dom";

export const Schedule = (props) =>{

    const {id}=useParams();
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        API.get('/schedules',{day:id})
            .then((result) => setSchedule(result.data))
            .catch((err) => console.error(err))
    }, [id]);


    return(
        <>
            <span>{schedule.id} {console.log(id + " "+ props.location.aboutProps)}</span>
            {/*<ul>*/}
            {/*    {schedule.id.map(session => <li key={session.start}>{session.start}</li>)}*/}
            {/*</ul>*/}
            {/*<ul>*/}
            {/*    {schedule[id].map.forEach(<li>item.start</li>)}*/}
            {/*</ul>*/}
        </>
    )
};
