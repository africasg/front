"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import { useParams } from "next/navigation"
import {  Episode } from "@/app/types"

const paginaEpisodio = ()=>{
    const [episodioOficial,setPersonajeOficial] = useState<Episode|null>(null)
    const {id} = useParams()

    useEffect(()=>{
         api.get(`/episode/${id}`).then((e)=>{
            setPersonajeOficial(e.data)
         })
    },[])
    return(
        <div className="generalPaginaPersonajes">
            <div className="generalPersonaje">
                <h1>Nombre: {episodioOficial?.name}</h1>
                <h2>Salió en: {episodioOficial?.air_date}</h2>
                <h2>Se creó el : {episodioOficial?.created}</h2>
            </div>
        </div>
    )
}
export default paginaEpisodio