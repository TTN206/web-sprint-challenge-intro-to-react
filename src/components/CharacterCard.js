// CharacterCard to export to Character
import React from "react";
import styled from "styled-components";

export default function CharacterCard ( props ) {

    const { character } = props;

    return (
        <CardForm>
            <CardDetails>
                <h3>{ character.name }</h3>
                <p>{ character.gender }</p>
                <p>{ character.height }</p>
                <p>{ character.mass }</p>
                <p>{ character.skin_color }</p>  
            </CardDetails>   
        </CardForm>
    )
}

// styled-Comp: WILL BE ADDING MORE INFO ONCE EVERYTHING IS FUNCTIONAL

const CardForm = styled.div`

`

const CardDetails = styled.div`


`