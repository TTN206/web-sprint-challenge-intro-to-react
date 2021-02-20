// CharacterCard to export to Character
import React from "react";
import styled from "styled-components";

export default function CharacterCard ( props ) {

    const { character } = props;

    return (
        <CardForm>
            <CardDetails>
                <h3>NAME: { character.name }</h3>
                <p>GENDER: { character.gender }</p>
                <p>HEIGHT: { character.height }</p>
                <p>MASS: { character.mass }</p>
                <p>SKIN COLOR: { character.skin_color }</p>  
            </CardDetails>   
        </CardForm>
    )
}

// styled-Comp: WILL BE ADDING MORE INFO ONCE EVERYTHING IS FUNCTIONAL

const CardForm = styled.div`
width: 50%;
`

const CardDetails = styled.div`


`