import styled from "styled-components";
import img from "../conference.jpg";

export const PageHeading = styled.h1`
    //background-color:${props => props.variant === 'secondary' ? '#508aff' : '#282c34'};
    min-height: 10vh;
    background-image: url(${img});
    height: 150px;
    display: flex; //z lewej domyslnie jest center 
    flex-direction: column; /* znowu weszlo center xd */
    align-items: center;
    justify-content: center; /*chyba rozmieszczenie wewnatrz tego componentu */
    font-size: calc(15px + 6vmin);
    color: white;
    text-shadow: 4px 4px 1px black;
    font-family: 'Century Gothic';
`;

export const LargePageHeading = styled(PageHeading)` //dziedziczenie
    min-height: 50vh;
`;
