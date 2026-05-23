"use client"

import "./page.css"
import { useEffect, useState } from "react"
import { api } from "../lib/api"
import { Character } from "../types"
import { useRouter } from "next/navigation"
import CharacterCard from "../components/characterCard/characterCard"



const paginaPersonaje = () =>{
     const [personajesOficial,setPersonajesOficial] = useState<Character[]|null>(null)
     const[error,setError] = useState <string>("")
     const[loading,setLoading] = useState <boolean>(true)

     const router= useRouter()
    useEffect(()=>{
        api.get(`/people`).then((e)=>{
            setPersonajesOficial(e.data)})
            .catch((e)=>{setError(e.message)})
            .finally(()=>{setLoading(false)})
        },[])
  

    return(
        <div className="generalPaginaChar">
        {loading && <p>Loading...</p>}
        {error && <p>El error es : {error}...</p>}
        {personajesOficial && personajesOficial.map((e)=>{
            return<CharacterCard key={(e.name)} character={e}></CharacterCard>
        })}
        </div>
    )
}


export default paginaPersonaje