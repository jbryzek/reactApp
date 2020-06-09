import React, {useEffect} from 'react'
import {useLocation, useHistory} from "react-router-dom";
import API from "../api";
import {Presentations} from "./Presentations";

export const Abstracts = () => {
    const history = useHistory();
    let file = null;
    let fileURL = null;
    const location = useLocation();
    const fileName = location.pathname;

    useEffect(() => {
        API.get(`${fileName}`, {responseType: "blob"})
            .then((result) => {
                file = new Blob(
                    [result.data],
                    {type: 'application/pdf'});
                fileURL = URL.createObjectURL(file);
                window.open(fileURL);
                history.goBack();
            })
            .catch(errInfo => {
                alert(errInfo);
            })
    }, [fileName]);
    return (
        <Presentations/>
    )
};
