import React from "react";
import {Link} from 'react-router-dom';

export const Navigation = () =>{

    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
        </ul>
    )
}
