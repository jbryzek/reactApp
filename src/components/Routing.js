import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import {ListOfRooms} from "./Lists/ListOfRooms";
import {Schedule} from "./Lists/Schedule";
import {Sessions} from "./Lists/Sessions";
import {Presentations} from "./Lists/Presentations";
import {Abstracts} from "./Lists/Abstracts";
import {Reminders} from "./Lists/Reminders";

export const Routing = () =>{
    return(
        <>
            <Switch>
                <Route exact path = "/schedules?day=Monday">
                    <Schedule/>
                </Route>
                <Route path="/schedules">
                    <Schedule/>
                </Route>
                {/*<Route path="/rooms">*/}
                {/*    <ListOfRooms/>*/}
                {/*</Route>*/}
                {/*<Route path="/sessions">*/}
                {/*    <Sessions/>*/}
                {/*</Route>*/}
                {/*<Route path="/presentations">*/}
                {/*    <Presentations/>*/}
                {/*</Route>*/}
                <Route path="/abstracts">
                    <Abstracts/>
                </Route>
                <Route path='/reminders'>
                    <Reminders/>
                </Route>
            </Switch>
        </>
    )
}
