import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import {ListOfRooms} from "./Lists/ListOfRooms";
import {Button} from "./Button/Button";
import {LoginForm} from "./Login/LoginForm";

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
                <Route path="/login">
                    <LoginForm/>
                </Route>
            </Switch>
        </>
    )
}
