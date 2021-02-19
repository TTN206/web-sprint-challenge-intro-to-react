// CharacterCard to export to Character
import React from "react";
import styled from "styled-components";

export default function CharacterCard ( props ) {

    const { character } = props;

    return (
        <CardForm>
            <CardDetails>
                <h3>name</h3>
                <p>gender</p>
                <p>height</p>
                <p>mass</p>
                <p>skin_color</p>  
            </CardDetails>   
        </CardForm>
    )
}

// styled-Comp: WILL BE ADDING MORE INFO ONCE EVERYTHING IS FUNCTIONAL

const CardForm = styled.div`

`

const CardDetails = styled.div`


`