import React, {useEffect, useState} from 'react'
import API from "../api";
import {Cards} from "../Cards";

export const Sessions = ()=>{
    const [session, setSession] = useState({});

    useEffect(() => {
        API.get('/sessions')
            .then((result) => setSession(result.data))
            .catch((err) => console.error(err))
    }, []);

    return(
        <>
            {/*<span>{session['FSIP']?.name}</span>*/}
            <Cards name={session['FSIP']?.name} localization={session['FSIP']?.localization}/>
        </>
    )
}
