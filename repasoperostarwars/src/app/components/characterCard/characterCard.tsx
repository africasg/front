"use client "
import "./characterCard.css"
import { Character } from "@/app/types"
import { useEffect } from "react"


 const CharacterCard = ({character}:{character:Character}) =>{


    return(
        <div className="generalCharacterCard">
            <div className="infoCharacter">
            <h1>{character.name}</h1>
            <h2>Nació en : {character.birth_year}</h2>
            <h2>Género: {character.gender}</h2>
        </div></div>
    )
}

export default CharacterCard;