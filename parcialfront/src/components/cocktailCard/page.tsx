"use client"
import { useRouter } from "next/navigation"
import type { Cocktail } from "@/types"
import { useLista } from "@/app/context/ListaContext"
import "./page.css"

export const CocktailCard = (params: { cocktelin: Cocktail }) => {
  const cocktail = params.cocktelin
  const router = useRouter()

  const { addLista } = useLista(); 

  return (
    <div className="cocktailCardContainer">
      <div className="cocktailCard">
        <div className="imageContainer">
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            onClick={() => router.push(`/cocktail/${cocktail.idDrink}`)}
          />
        </div>

        <div className="cocktailDataContainer">
          <h2 className="nombreCocktail">
            {cocktail.strDrink}
          </h2>

          <button
            className="botonLista"
            onClick={() => addLista(cocktail.idDrink)}
          >
            Añadir a la lista
          </button>

          <button
            className="botonVer"
            onClick={() => router.push(`/cocktail/${cocktail.idDrink}`)}
          >
            Ver detalles
          </button>

        </div>
      </div>
    </div>
  )
}