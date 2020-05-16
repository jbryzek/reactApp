import React, {useEffect, useState} from 'react'
import API from "../api";
import {Cards} from "../Cards";
import {Button} from "react-bootstrap";

export const Sessions = ()=>{
    const [session, setSession] = useState({});
    const token = localStorage.getItem('token')

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
