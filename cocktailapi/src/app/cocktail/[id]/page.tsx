"use client"
import { useParams } from "next/navigation"
import { Cocktail } from "@/app/types"
import { useState } from "react"
import { useEffect } from "react"
import "./page.css"
import { getCocktailById } from "@/app/lib/api/cocktail"
import { useRouter } from "next/navigation"

const CocktailConcreto = ( ) =>{
    const router = useRouter()
    const {id} = useParams()
    let idBueno = Number(id)
    const [cocktail,setCocktail] = useState<Cocktail|null>(null)
    const [loading, setLoading] = useState<boolean>(true);
  const [miErrorcillo, setError] = useState<string>("");
  useEffect(()=>{
    getCocktailById(Number(idBueno)).then((res)=>{
    const arrayMiCocktail = res.data.drinks
    setCocktail((arrayMiCocktail[0]))
    setError
    }).catch((e)=>{
      setError(`Error cargando los datos: ${e.message ? e.message: e}`)
    }).finally(()=>{
        setLoading(false);
    })
},[idBueno]);
   return(
  
    <div className="containerDetalle">

      {loading && <h1>Loading...</h1>}
      {miErrorcillo && <h2>{miErrorcillo}</h2>}

      {cocktail && (
        <>
          <h1>{cocktail.strDrink.toUpperCase()}</h1>
          <h1></h1>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p>{cocktail.strInstructions}</p>
        </>
      )}
       {cocktail && (
          <div className="Botoncillo">
         <button
      className="BotonVolver"
            onClick={() => router.back()}
          >  ← Volver

        </button>
          </div>
)}
    </div>
  )

   

}

export default CocktailConcreto
  