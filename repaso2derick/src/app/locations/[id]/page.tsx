"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import { useParams } from "next/navigation"
import {  Location } from "@/app/types"

const paginaLocation = ()=>{
    const [locationOficial,setPersonajeOficial] = useState<Location|null>(null)
    const {id} = useParams()

    useEffect(()=>{
         api.get(`/location/${id}`).then((e)=>{
            setPersonajeOficial(e.data)
         })
    },[])
    return(
        <div className="generalPaginaPersonajes">
            <div className="generalPersonaje">
                <h1>Nombre: {locationOficial?.name}</h1>
                <h2>Dimensión: {locationOficial?.dimension}</h2>
                <h2>Se creó el : {locationOficial?.created}</h2>
            </div>
        </div>
    )
}
export default paginaLocation