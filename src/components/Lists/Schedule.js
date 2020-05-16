import React, {useEffect, useState} from 'react'
import API from "../api";
import {
    useParams
} from "react-router-dom";

export const Schedule = (props) =>{
    const [schedule, setSchedule] = useState([]);
    const params={
        "day":window.location.href.split('=')[1]
    };

    const getDay = ()=>{
        return window.location.href.split('=')[1]
    };

    useEffect(() => {
        API.get('/schedules',params)
            .then((result) => setSchedule(result.data))
            .catch((err) => console.error(err))
    }, []);


    return(
        <>
            <span>{getDay()}</span><br/>
            <span>tu: {schedule[0]}</span>
            {/*<ul>*/}
            {/*    {schedule[0]['TUESDAY'].map(session => <li key={session.start}>{session.start}</li>)}*/}
            {/*</ul>*/}
        </>
    )
};
