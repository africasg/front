"use client"
import { useEffect, useState } from "react";
import "./globals.css"

import { Cocktail } from "./types";
import { CocktailById } from "@/components/cocktailCard/cocktail";
import { api } from "./lib/api/axios";


const Home =() =>{
  const [search,setSearch] = useState<string>("");
  const [inputName,setInputName] = useState<string>("")
  const [cocktails,setCocktails] = useState<Cocktail[]>([]);
  const [pagina, setPagina] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [miErrorcillo, setError] = useState<string>("");
 
  
    useEffect(() => {
    if (!search) return
      let url = "/search.php?s="
    

      if(inputName)  {     
       url = url + inputName;
      }

      
    api.get(`${url}`)
      .then(res => {
        setCocktails(res.data.drinks)
        setError("")
      })
      .catch((e) => {
        setError(`Error cargando los datos: ${e.message ? e.message: e}`)
      })
      .finally(()=>{
        setLoading(false);
      })

  }, [search, pagina])
  const borrarFiltros = () => {
  setSearch("");
  setInputName("");
  setCocktails([]);
  setPagina(1);
  setError("");
};
  
  
return (
  <div className="mainContainer">

    <div className="headerContainer">
      <h1 className="tituloPrincipal">
        Archivo de Cocktails
      </h1>
    </div>

    <div className="searchContainer">
      <form
        className='buscador'
        onSubmit={(e) => {
          e.preventDefault()
          setSearch(inputName)
          
        }}
      >
        <label> Nombre: </label>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      
      {search && (
  <button 
    className="botonBorrarFiltros" 
    onClick={borrarFiltros}

  >
    Borrar Filtros
  </button>
)}
    </div>

    <div className="infoContainer">
      {search && loading && <h1>Loading...</h1>}
      {miErrorcillo && <h2>{miErrorcillo}</h2>}
    </div>

    <div className="cocktailContainer">
      {cocktails.map((e) => (
        <CocktailById key={e.idDrink} cocktelin={e} />
      ))}
    </div>

  </div>
)
}
export default Home;