import React, {useEffect, useState} from 'react'
import API from "../api";

const Search=({keywordd,title})=>{
    if(title===keywordd || title.includes(keywordd))
        return <span>{title}</span>
    return <span></span>
};

export const Presentations=(props)=>{
    const keyword = props.keyword;
    const [presentation, setPresentation] = useState([]);

    useEffect(() => {
        API.get('/presentations')
            .then((result) => setPresentation(result.data))
            .catch((err) => console.error(err))
    }, []);

    return(
        <>
            <span>
                {presentation.map(pres => <Search key={pres.id} title={pres.title} keywordd={"Access "}/>)}
            </span>
            <ul>
                {presentation.map(pres => <li key={pres.id}>{pres.title}</li>)}
            </ul>
        </>
    )
};
