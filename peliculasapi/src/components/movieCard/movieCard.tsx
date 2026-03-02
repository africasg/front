"use client"

import { Movie } from "@/app/types";
import { api } from "@/lib/api/axios";
import "./movieCard.css"
import { getMovieById } from "@/lib/api/getMovieId";
import Link from "next/link";
import { useEffect, useState } from "react";

export const MovieById = (params:{id?: number, pelicula?: Movie})=>{
    const [pelicula,setPelicula] = useState<Movie|null> (null);

    const idMovie = params.id
    
    useEffect(()=>{
        getMovieById(idMovie!).then((e)=>setPelicula(e.data))
        
    },[idMovie]
    )

    return (
        <div className="movieCardContainer">
           <div className="img">
            <Link href={`/movie/${idMovie}`}>
            <img src={pelicula?.image_url}></img>
            </Link>
           </div>
           <label>{pelicula?.title}</label>
        </div>
    )

}