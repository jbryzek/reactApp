import React, {useState} from "react";
import {SButton} from "./styled/Button";

export const Button = () =>{
    const [count, setCount] = useState(false);

    return (
        <SButton onClick={() => setCount(!count)}>
            {count ? 'clicked' : 'not clicked'}
        </SButton>
    )
}
