import React, {useEffect, useState} from "react";
import API from '../api'

export const ListOfRooms = (props) => {
    const localization = props.localization;
    const [rooms, setRooms] = useState({});

    useEffect(() => {
        API.get('/rooms')
            .then((result) => setRooms(result.data))
            .catch((err) => console.error(err))
    }, []);


    return (
        <>
            {/*<span>Lng: {rooms['A']?.lng}</span><br/>*/}
            {/*<span>Name: {rooms['A']?.name}</span><br/>*/}
            <span> {Object.keys(rooms)}</span>
            <ul>
                {Object.keys(rooms).map(room => <li key={room.name}>{room.start}</li>)}
            </ul>
            <ul>
                {Object.keys(rooms).forEach(room =><li key={room.name}>room.name</li>)}
            </ul>
            <span>{rooms[localization]?.name}</span>
        </>
    )
};
