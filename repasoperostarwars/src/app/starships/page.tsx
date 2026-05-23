"use client"

import "./page.css"
import { useEffect, useState } from "react"
import { api } from "../lib/api"
import { Planet, Starship } from "../types"
import { useRouter } from "next/navigation"
import StarshipCard from "../components/starshipCard/starshipCard"



const paginaNave = () =>{
     const [navesOficial,setNavesOficial] = useState<Starship[]|null>(null)
     const[error,setError] = useState <string>("")
     const[loading,setLoading] = useState <boolean>(true)
     const router= useRouter()
    useEffect(()=>{
        api.get(`/starships`).then((e)=>{
            setNavesOficial(e.data)})
            .catch((e)=>{setError(e.message)})
            .finally(()=>{setLoading(false)})
        },[])
  

    return(
        <div className="generalPaginaNave">
        {loading && <p>Loading...</p>}
        {error && <p>El error es : {error}...</p>}
        {navesOficial && navesOficial.map((e)=>{
            return<StarshipCard key={(e.name)} starship={e}></StarshipCard>
        })}
        </div>
    )
}


export default paginaNave