'use client';
import { getCharacterById } from "@/lib/api/character";
import { Character } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const LaOtraConId = () =>{
    // mismo nombre carpeta y parámetro

    const {id} = useParams();
    const [personaje,setPersonaje]= useState<Character|null> (null);
    const [loading,setLoading] =useState<boolean>(true); 
    const [error,setError] = useState<string|null> (null);
    
    useEffect(()=>{
        getCharacterById(Number(id)).then((res)=>{
            setPersonaje(res);
        })
    },[id])
    return(
        <div>
            <h1>La otra pero con id y ese id es {id}</h1>
            {personaje&&(
                <>
                <img src ={personaje.image}/>
                <h2>Nombre: {personaje.name}</h2>
                </>
            )}
        </div>
    )
}
export default LaOtraConId;