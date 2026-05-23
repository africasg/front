"use client"

import "./page.css"
import { useEffect, useState } from "react"
import { api } from "../lib/api"
import { Planet } from "../types"
import { useRouter } from "next/navigation"
import PlanetCard from "../components/planetsCard/planetCard"



const paginaPlaneta = () =>{
     const [planetasOficial,setPlanetasOficial] = useState<Planet[]|null>(null)
     const[error,setError] = useState <string>("")
     const[loading,setLoading] = useState <boolean>(true)
     const router= useRouter()
    useEffect(()=>{
        api.get(`/planets`).then((e)=>{
            setPlanetasOficial(e.data)})
            .catch((e)=>{setError(e.message)})
            .finally(()=>{setLoading(false)})
        },[])
  

    return(
        <div className="generalPaginaPlanet">
        {loading && <p>Loading...</p>}
        {error && <p>El error es : {error}...</p>}
        {planetasOficial && planetasOficial.map((e)=>{
            return<PlanetCard key={(e.name)} planet={e}></PlanetCard>
        })}
        </div>
    )
}


export default paginaPlaneta