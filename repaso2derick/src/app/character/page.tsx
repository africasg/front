"use client"

import { useEffect, useState } from "react"
import { Character } from "../types"
import { api } from "@/lib/api"
import { FuncionPaginacion } from "../components/paginador/paginador"
import { CharacterCard } from "../components/characterCard/characterCard"
import "./page.css"
const paginaPersonajes = ()=>{
    const [personajes,setPersonajes] = useState<Character[]>([])
    const [error,setError] = useState<string>("")
    const [loading,setLoading] = useState<boolean>(true)
    const [page,setPage] = useState<number>(1)
    const [prev,setPrev] = useState<boolean>(false)
    const [next,setNext] = useState<boolean>(false)
    const [search,setSearch] = useState<string>("")
    const [name,setName] = useState<string>("")
    useEffect(()=>{
         api.get(`/character?page=${page}&name=${search}`).then((e)=>{
            setPersonajes(e.data.results)
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
                    <h1>Personajes</h1>
                    <div className="info">
                        {loading && <p>Loading...</p>}
                        {error && <p>{error}</p>}
                        {personajes && personajes.map((e)=>{
                            return <CharacterCard key={e.id} personaje={e}></CharacterCard>
                           
                        })}
                    </div> 
                </div>
                    <FuncionPaginacion page={page} prev={prev} next={next} setPage={setPage}></FuncionPaginacion>
   
            </div>
    )
}
export default paginaPersonajes