import React, {useEffect, useState} from "react";
import API from '../api'

export const ListOfRooms = () =>{
     const [room ,setRoom] = useState([]);
    // const [age, setAge] = useState([])
    // const [lng, setLng] = useState([])

    //const [item, setItem] = useState([])

    useEffect(() => {
        API.get('/rooms')
            .then((result) => setRoom(result.data))
            .catch((err) =>console.error(err))
    },[]);

    return(
        <>
            <span>
                Name: {room['A']?.lng}
            </span>
        </>
    )
}
