import React, {useState} from "react";
import {SButton} from "./styled/Button";
import Emoji from "react-emoji-render";
import {Rotate} from "./styled/Rotate"
import {Move} from "./styled/Move";
import {useHistory} from "react-router-dom";

export const Button = () => {
    const [count, setCount] = useState(false);
    const history = useHistory();
    const logForm =()=>{
        history.push('/login')
        setCount(!count);
    };

    return (
        <Move>
            <Rotate>
                <Emoji text=":key: "/>
            </Rotate>
            {/*<SButton onClick={() => setCount(!count)}>*/}
            <SButton onClick={logForm}>
               {count ? 'Log out' : 'Log in'}
            </SButton>
        </Move>
    )
};
