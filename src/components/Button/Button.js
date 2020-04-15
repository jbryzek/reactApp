import React, {useState} from "react";
import {SButton} from "./styled/Button";
import Emoji from "react-emoji-render";
import {Rotate} from "./styled/Rotate"
import {Move} from "./styled/Move";

export const Button = () => {
    const [count, setCount] = useState(false);

    return (
        <Move>
            <Rotate>
                <Emoji text=":key: "/>
            </Rotate>
            <SButton onClick={() => setCount(!count)}>
               Log in, {count ? 'clicked' : 'not clicked'}
            </SButton>
        </Move>
    )
}
