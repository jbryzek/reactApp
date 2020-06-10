import React, {useEffect, useState} from 'react'
import API from "../api";
import {BsFilePlus} from "react-icons/all";
import {ReminderCreateForm} from "../Forms/ReminderCreateForm";
import {BsFileEarmarkArrowDown} from "react-icons/all";
import {useHistory} from "react-router-dom";

export const Presentations = (props) => {
    const shortName = props.shortName;
    const day = props.day;
    const [presentation, setPresentation] = useState([]);
    const [reminder, setReminder] = useState(false);
    const history = useHistory();

    useEffect(() => {
        API.get('/presentations')
            .then((result) => {
                setPresentation(sortAscending(result.data.filter(pres => pres.session === shortName && pres.date.includes(day))));
            })
            .catch((err) => console.error(err))
    }, [day, shortName]);

    let sortAscending = (data) => {
        return data.sort((a, b) => {
            if (a.date.substring(11, 16) < b.date.substring(11, 16)) {
                return -1;
            }
            if (a.date.substring(11, 16) > b.date.substring(11, 16)) {
                return 1;
            }
            return 0;
        })
    };

    const openAbstract = (name) => {
        history.push(`/abstracts/${name}`);
    };

    const isLoggedIn = () => {
        return localStorage.getItem('token') != null;
    };

    return (
        <>
            {presentation.map(pres => <div key={pres.id}>
                <hr/>
                <span className="font-italic">{pres.date.substring(11, 16)}</span> {pres.title} <br/>
                {pres.authors.map((p, i) => [i > 0 && ', ',
                    <span key={pres.id + p} className="font-italic" style={{fontSize: 'small'}}>{p}</span>])}
                {pres.filename !== "" ?
                    <BsFileEarmarkArrowDown onClick={() => openAbstract(pres.filename)}/>
                    : <span> </span>}
                {isLoggedIn()?<BsFilePlus size='1em' onClick={() => setReminder(true)}/>:<span/>}
                <ReminderCreateForm show={reminder} onHide={() => setReminder(false)} id={pres.id}/>
            </div>)}
        </>
    )
};

export const PresentationsTitle = (props) => {
    const [presentation, setPresentation] = useState([]);
    const id = props.id;

    useEffect(() => {
        API.get(`/presentations/${id}`)
            .then((result) => {
                setPresentation(result.data);
            })
            .catch((err) => console.error(err))
    }, [id]);

    return <span>{presentation.title}</span>
};

