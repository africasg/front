import { useEffect, useState } from "react";
import { api } from "@/app/lib/api/axios";
import type { Cocktail } from "@/app/types";
import { useRouter } from "next/navigation";


export const CocktailById = (params: {id?: string, cocktelin?: Cocktail, onSelect?: () => void}) =>{
    const id = params.id;
    const paramsCharacter = params.cocktelin;

    const router = useRouter();


    const [cocktail, setCocktail] = useState<Cocktail | null>(paramsCharacter ? paramsCharacter : null);
 

    useEffect(()=> {
       !cocktail && id && api.get(`/character/${id}`).then(res=>{
        setCocktail(res.data.drinks)
       })

    }, [id])

    return (
  <>
    {cocktail ? (
      <div className="cocktailCardContainer">
        <div className="cocktailCard">

          <div className="imageContainer">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
            />
          </div>

          <div className="cocktailDataContainer">
            <h2 className="nombreCocktail">
              {cocktail.strDrink}
            </h2>

            <p>Categoría: {cocktail.strCategory}</p>
            <p>Alcohol: {cocktail.strAlcoholic}</p>

            <button
              className="botonVer"
              onClick={() => router.push(`/cocktail/${cocktail.idDrink}`)}
            >
              Ver detalles
            </button>
          </div>

        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </>
)
}