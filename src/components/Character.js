// Write your Character component here
import React from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";


export default function Character ( props ) {

    const { characters } = props;
    console.log( props );

    return (
        <CardDiv>
            <Card>
                {
                    characters.map(( character ) => {
                        return <CharacterCard key = { character.id } character = { character } />
                    })
                }
            </Card>
        </CardDiv>
    )
}

// styled Comps  /* will add style in a bit */

const CardDiv = styled.div`
padding: 2%;
`


const Card = styled.div`
width: 30%;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly

`