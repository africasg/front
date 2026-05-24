"use client"

import { useEffect, useState } from "react"
import { Character, Episode } from "../types"
import { api } from "@/lib/api"
import { FuncionPaginacion } from "../components/paginador/paginador"
import { EpisodeCard } from "../components/episodeCard/episodeCard"

const paginaEpisodios = ()=>{
    const [episodios,setEpisodios] = useState<Episode[]>([])
    const [error,setError] = useState<string>("")
    const [loading,setLoading] = useState<boolean>(true)
    const [page,setPage] = useState<number>(1)
    const [prev,setPrev] = useState<boolean>(false)
    const [next,setNext] = useState<boolean>(false)
    const [search,setSearch] = useState<string>("")
    const [name,setName] = useState<string>("")
    useEffect(()=>{
         api.get(`/episode?page=${page}&name=${search}`).then((e)=>{
            setEpisodios(e.data.results)
            setPrev(e.data.info.prev)
            setNext(e.data.info.next)
         }).catch((e)=>{
            setError(e.message)
         }).finally(()=>{
            setLoading(false)
         })

    },[page,search])
    return(
        <div className="generalPagina">
            <div className="barraBusqueda">
                <p>Nombre:</p>
                <input onChange={(e)=>{setName(e.target.value)}}></input>
                <button onClick={(e)=>{setSearch(name)}}>Buscar</button>
                </div>
                <div className="tocho">
                    <h1>Episodios</h1>
                    <div className="info">
                        {loading && <p>Loading...</p>}
                        {error && <p>{error}</p>}
                        {episodios && episodios.map((e)=>{
                            return <EpisodeCard key={e.id} episode={e}></EpisodeCard>
                           
                        })}
                    </div> 
                </div>
                    <FuncionPaginacion page={page} prev={prev} next={next} setPage={setPage}></FuncionPaginacion>
   
            </div>
    )
}
export default paginaEpisodios