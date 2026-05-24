"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import { useParams } from "next/navigation"
import { Character } from "@/app/types"
import "./page.css"
const paginaPersonaje = ()=>{
    const [personajeOficial,setPersonajeOficial] = useState<Character|null>(null)
    const {id} = useParams()

    useEffect(()=>{
         api.get(`/character/${id}`).then((e)=>{
            setPersonajeOficial(e.data)
         })
    },[])
    return(
        <div className="generalPaginaPersonajes">
            <div className="generalPersonaje">
                <img src = {personajeOficial?.image}></img>
                <h1>Nombre: {personajeOficial?.name}</h1>
                <h2>Gender: {personajeOficial?.gender}</h2>
                <h2>Especie: {personajeOficial?.species}</h2>
            </div>
        </div>
    )
}
export default paginaPersonaje