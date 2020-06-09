import React from 'react'
import {
    Switch,
    Route, Redirect
} from "react-router";
import {Schedule} from "./Lists/Schedule";
import {Abstracts} from "./Lists/Abstracts";
import {Reminders} from "./Lists/Reminders";

export const Routing = () =>{
    return(
        <>
            <Switch>
                <Redirect exact from="/" to="/schedules?day=Monday" />
                <Route exact path = "/schedules?day=Monday">
                    <Schedule/>
                </Route>
                <Route path="/schedules">
                    <Schedule/>
                </Route>
                <Route path="/abstracts">
                    <Abstracts/>
                </Route>
                <Route path='/reminders'>
                    <Reminders/>
                </Route>
            </Switch>
        </>
    )
};
