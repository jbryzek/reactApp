import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import {ListOfRooms} from "./Lists/ListOfRooms";
import {Schedule} from "./Lists/Schedule";
import {Sessions} from "./Lists/Sessions";
import {Presentations} from "./Lists/Presentations";

export const Routing = () =>{
    return(
        <>
            <Switch>
                <Route exact path = "/">
                    main
                </Route>
                <Route path="/rooms">
                    <ListOfRooms/>
                </Route>
                <Route path="/schedules">
                    <Schedule/>
                </Route>
                <Route path="/sessions">
                    <Sessions/>
                </Route>
                <Route path="/presentations">
                    <Presentations/>
                </Route>
            </Switch>
        </>
    )
}
