"use client "
import "./starshipCard.css"
import { Starship } from "@/app/types"
import { useEffect } from "react"


 const StarshipCard = ({starship}:{starship:Starship}) =>{


    return(
        <div className="generalStarshipCard">
            <div className="infoStarship">
            <h1>{starship.name}</h1>
            <h2>Creada: {starship.created}</h2>
            <h2>Coste: {starship.cost_in_credits}</h2>
        </div></div>
    )
}

export default StarshipCard;