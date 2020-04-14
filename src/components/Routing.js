import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import {ListOfRooms} from "./Lists/ListOfRooms";
import {Button} from "./Button/Button";

export const Routing = () =>{
    return(
        <>
            <Switch>
                <Route exact path = "/">
                    <Button/>
                </Route>
                <Route path="/rooms">
                    <ListOfRooms/>
                </Route>
            </Switch>
        </>
    )
}
