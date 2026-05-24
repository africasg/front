"use client"

import { Character, Episode } from "@/app/types"
import { api } from "@/lib/api"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type Props = {
    id?:number,
    episode?:Episode
}
export const EpisodeCard = ({id,episode: episode}:Props) =>{
    const router = useRouter()
    const [episodioOficial,setEpisodioOficial] = useState<Episode|null>(null)
 useEffect(()=>{
   
    if(id){
        api.get(`/character/${id}`).then((e)=>{
            setEpisodioOficial(e.data.results)
        })
    }else if(episode){
        setEpisodioOficial(episode)

    }
 },[id,episode])
 return(
    <div className="generalCartaPersonaje">
        <h1>Nombre: {episodioOficial?.name}</h1>
        <h2>Salió en: {episodioOficial?.air_date}</h2>
        <h2>Se creó el : {episodioOficial?.created}</h2>

    <button onClick={()=>router.push(`/episodes/${episodioOficial?.id}`)}>Ver más</button>
    </div>
 )
}
