"use client"

import { useState } from "react"
import { useSearch } from "@/context/searchContext"
import { useParams } from "next/navigation"

export const Busqueda= ()=>{
   
  const {setSearch}=useSearch()
  const [name,setName] = useState<string>("")
    return(
     <div>
        <label>Nombre: </label>
        <input onChange={(e)=>{setName(e.target.value)}}>
         
        </input>
        <button onClick={()=>{setSearch(name); setName("")}}>Buscar</button>
     </div>
    )
}


