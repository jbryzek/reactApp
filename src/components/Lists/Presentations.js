import React, {useEffect, useState} from 'react'
import API from "../api";
import {Link} from 'react-router-dom';

const Search=({keywordd,title})=>{
    if(title===keywordd || title.includes(keywordd))
        return <span>{title}</span>
    return <span></span>
};

export const Presentations=(props)=>{
    const shortName=props.shortName;
    const day = props.day;
    const keyword = props.keyword;
    const [presentation, setPresentation] = useState([]);

    useEffect(() => {
        API.get('/presentations')
            .then((result) => {
                setPresentation( sortAscending(result.data.filter(pres => pres.session===shortName && pres.date.includes(day))));
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

    return(
        <>
                {presentation.map(pres => <div key={pres.id}> <hr/> <span className="font-italic">{pres.date.substring(11,16)}</span> {pres.title} {pres.filename!=="" ?
                    <Link className="font-italic" to={`/abstracts/${pres.filename}`}>PDF</Link>
                    : <div> </div> } {pres.authors.map(p=> <div key={pres.id+p} className="font-italic" style={{fontSize:'small'}}>{p}</div> )}
                </div>)}
        </>
    )
};
