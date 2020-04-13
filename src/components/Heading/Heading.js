import React from "react";
import {PageHeading} from "./styled/PageHeading";

export function Heading(props) {
    return (
        <PageHeading variant={props.variant}>
            {props.title}
        </PageHeading>
    );
}
