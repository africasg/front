"use client"

import { Character, Episode, Location } from "@/app/types"
import { api } from "@/lib/api"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type Props = {
    id?:number,
    location?:Location
}
export const LocationCard = ({id,location: location}:Props) =>{
    const router = useRouter()
    const [episodioOficial,setEpisodioOficial] = useState<Location|null>(null)
 useEffect(()=>{
   
    if(id){
        api.get(`/location/${id}`).then((e)=>{
            setEpisodioOficial(e.data.results)
        })
    }else if(location){
        setEpisodioOficial(location)

    }
 },[id,location])
 return(
    <div className="generalCartaPersonaje">
        <h1>Nombre: {episodioOficial?.name}</h1>
        <h2>Dimensión: {episodioOficial?.dimension}</h2>
        <h2>Se creó el : {episodioOficial?.created}</h2>

    <button onClick={()=>router.push(`/locations/${episodioOficial?.id}`)}>Ver más</button>
    </div>
 )
}
