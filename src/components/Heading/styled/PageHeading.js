import styled from "styled-components";

export const PageHeading = styled.h1`
    background-color: ${props => props.variant === 'secondary' ? '#508aff' : '#282c34'};
    min-height: 10vh;
    display: flex; //z lewej domyslnie jest center 
    flex-direction: column; /* znowu weszlo center xd */
    align-items: center;
    justify-content: center; /*chyba rozmieszczenie wewnatrz tego componentu */
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const LargePageHeading = styled(PageHeading)` //dziedziczenie
    min-height: 50vh;
`;
