"use client "
import "./planetCard.css"
import { Planet } from "@/app/types"
import { useEffect } from "react"


 const PlanetCard = ({planet}:{planet:Planet}) =>{


    return(
        <div className="generalPlanetCard">
            <div className="infoPlanet">
            <h1>{planet.name}</h1>
            <h2>Gravity: {planet.gravity}</h2>
            <h2>Population: {planet.population}</h2>
        </div></div>
    )
}

export default PlanetCard;