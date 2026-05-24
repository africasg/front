"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import { FuncionPaginacion } from "../components/paginador/paginador"
import { Location } from "../types"
import { LocationCard } from "../components/locationCard/locationCard"

const paginaLocations = ()=>{
    const [locations,setLocations] = useState<Location[]>([])
    const [error,setError] = useState<string>("")
    const [loading,setLoading] = useState<boolean>(true)
    const [page,setPage] = useState<number>(1)
    const [prev,setPrev] = useState<boolean>(false)
    const [next,setNext] = useState<boolean>(false)
    const [search,setSearch] = useState<string>("")
    const [name,setName] = useState<string>("")
    useEffect(()=>{
         api.get(`/location?page=${page}&name=${search}`).then((e)=>{
            setLocations(e.data.results)
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
                    <h1>Localizacines</h1>
                    <div className="info">
                        {loading && <p>Loading...</p>}
                        {error && <p>{error}</p>}
                        {locations && locations.map((e)=>{
                            return <LocationCard key={e.id} location={e}></LocationCard>
                           
                        })}
                    </div> 
                </div>
                    <FuncionPaginacion page={page} prev={prev} next={next} setPage={setPage}></FuncionPaginacion>
   
            </div>
    )
}
export default paginaLocations