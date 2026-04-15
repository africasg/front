"use client"
import { useParams, useRouter } from "next/navigation"
import { Cocktail } from "@/types"
import { useState, useEffect } from "react"
import "./page.css"
import { getCocktailById } from "@/lib/api/cocktail"

const CocktailConcreto = ( ) => {
  const router = useRouter()
  const { id } = useParams()
    let idBueno = Number(id)
  const [cocktail, setCocktail] = useState<Cocktail | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [miErrorcillo, setError] = useState<string>("")

  useEffect(() => {
    if (!id) return
    getCocktailById(idBueno).then((res) => {
        if (res.data.drinks) {
          const arrayMiCocktail = res.data.drinks
          setCocktail((arrayMiCocktail[0]))
        } else { setError("No se encontró el cocktail")}
      })
      .catch((e) => {
        setError(`Error cargando los datos: ${e.message ? e.message : e}`)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [idBueno])

    return (
      <div className="containerDetalle">
      {loading && <h1>Loading...</h1>}
      {miErrorcillo && <h2>{miErrorcillo}</h2>}
      {cocktail && (
        <>
          <h1>{cocktail.strDrink.toUpperCase()}</h1>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p>Categoría: {cocktail.strCategory}</p>
          <p>Alcohol: {cocktail.strAlcoholic}</p>
          <p>Vaso: {cocktail.strGlass}</p>
          <p>{cocktail.strInstructions}</p>
            <h3>Ingredientes</h3>
          {cocktail.strIngredient1 && <p>{cocktail.strIngredient1}</p>}
          {cocktail.strIngredient2 && <p>{cocktail.strIngredient2}</p>}
          {cocktail.strIngredient3 && <p>{cocktail.strIngredient3}</p>}
          {cocktail.strIngredient4 && <p>{cocktail.strIngredient4}</p>}
          {cocktail.strIngredient5 && <p>{cocktail.strIngredient5}</p>}
          {cocktail.strIngredient6 && <p>{cocktail.strIngredient6}</p>}
          {cocktail.strIngredient7 && <p>{cocktail.strIngredient7}</p>}
          {cocktail.strIngredient8 && <p>{cocktail.strIngredient8}</p>}
          {cocktail.strIngredient9 && <p>{cocktail.strIngredient9}</p>}
          {cocktail.strIngredient10 && <p>{cocktail.strIngredient10}</p>}
          {cocktail.strIngredient11 && <p>{cocktail.strIngredient11}</p>}
          {cocktail.strIngredient12 && <p>{cocktail.strIngredient12}</p>}
          {cocktail.strIngredient13 && <p>{cocktail.strIngredient13}</p>}
          {cocktail.strIngredient14 && <p>{cocktail.strIngredient14}</p>}
          {cocktail.strIngredient15 && <p>{cocktail.strIngredient15}</p>}
        </>
      )}

      {cocktail && (
        <div className="Botoncillo">
      <button
            className="BotonVolver"
            onClick={() => router.back()}
          > ← Volver
      </button>
        </div>
)}

   </div>
  )
}

export default CocktailConcreto