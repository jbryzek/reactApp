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
            <ul>
                {Object.values(rooms).map((room) => <li key={room}> {room.name}</li>)}
            </ul>
            <span>{rooms[localization]?.name}</span>
        </>
    )
};
