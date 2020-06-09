import React, {useEffect, useState} from 'react'
import API from "../api";
import {Cards} from "../Cards";

export const Sessions = (props) => {
    const [session, setSession] = useState({});
    const name = props.sessionName;
    const day = props.sessionDay;

    useEffect(() => {
        API.get('/sessions')
            .then((result) => setSession(result.data))
            .catch((err) => console.error(err))
    }, []);

    return (
        <>
            {<Cards name = {session[name]?.name} shortName={name} localization={session[name]?.localization} day={day} session={session}/>}
            </>
    )
};
