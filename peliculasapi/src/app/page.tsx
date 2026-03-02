"use client"
import Image from "next/image";
import "./globals.css";

import { Movie } from "./types";
import { api } from "@/lib/api/axios";
import { useEffect, useState } from "react";
import { getMovieByStars } from "@/lib/api/getMovieStars";
import { MovieById } from "@/components/movieCard/movieCard";


const Home= () =>{

  const [mejorValoradas,setMejorValoradas] = useState<Movie[]>([])

useEffect(() => {
  getMovieByStars(4).then((res4) => {
    getMovieByStars(5).then((res5) => {

      const todas = [...res4.data, ...res5.data];

      setMejorValoradas(todas);
    });
  });
}, []);
  
  return (
   <div className="mainContainer">
    <div className="headerContainer">
      <h1>Mi archivo performativo</h1>
      <div className="buttonBusqueda">
          <button>🔎</button>
      </div>

    </div>
    <div className="movieContainer">
    <div className="mejorValoradas">
      <label>Mejor valoradas:</label> 
      <div className="mejoresPelis">
      {mejorValoradas.map((e) => (
        <MovieById key={e.id} id={e.id} pelicula={e} />
        ))}
        </div>
    </div>
      <div className="genderContainer">

      </div>
      <div className="mejorValoradasUlt">

      </div>

    </div>

   </div>
       
  );
}
export default Home;