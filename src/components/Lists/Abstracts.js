import React, {useEffect, useState} from 'react'
import {useLocation, useHistory} from "react-router-dom";
import API from "../api";
import {Presentations} from "./Presentations";

export const Abstracts = () => {
    //const fileName = props.fileName;
    //const fileName = "GENERAL/arraras_gaspar_portero.pdf";
    const history = useHistory();
    let file = null;
    let fileURL = null;
    const location = useLocation();
    const fileName = location.pathname;

    useEffect(() => {
        API.get(`${fileName}`, {responseType: "blob"})
            .then((result) => {
                //setAbstract(result.data)
                file = new Blob(
                    [result.data],
                    {type: 'application/pdf'});
                fileURL = URL.createObjectURL(file);
                window.open(fileURL);
                history.goBack();
            })
            .catch(error => {
                //history.push('/')
            })
    }, [fileName]);
    return (
        <Presentations></Presentations>
    )
};
