"use client"

import { useEffect, useState } from "react"
import "./globals.css"
import { Cocktail } from "@/types"
import { CocktailCard } from "@/components/cocktailCard/page"
import { api } from "@/lib/api/axios"
import { getRandomCocktail } from "@/lib/api/lookup"
import { useRouter } from "next/navigation"

const Home = () => {

  const router = useRouter()
  const [search, setSearch] = useState<string>("")
  const [inputName, setInputName] = useState<string>("")
  const [cocktails, setCocktails] = useState<Cocktail[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [miErrorcillo, setError] = useState<string>("")

  useEffect(() => {
    if (!search) return
    let url = "/search.php?s="
    if (inputName) {
      url = url + inputName
    }
    setLoading(true)

    api.get(url)
      .then((res) => {
        setCocktails(res.data.drinks)
        setError("")
      })
      .catch((e) => {
        setError(`Error cargando los datos: ${e.message ? e.message : e}`)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [search])

  const borrarFiltros = () => {
    setSearch("")
    setInputName("")
    setCocktails([])
    setError("")
  }

  const cocktailRandom = async () => {
    const res = await getRandomCocktail()
    const id = res.data.drinks[0].idDrink
    router.push(`/cocktail/${id}`)
  }

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <h1 className="tituloPrincipal">
          Archivo de Cocktails
        </h1>
      </div>

      <div className="searchContainer">
        <form
          className="buscador"
          onSubmit={(e) => {
            e.preventDefault()
            setSearch(inputName)
          }}
        >
          <label>Nombre:</label>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button type="submit">
            Buscar
          </button>

        </form>
        <button onClick={cocktailRandom}>
          Dime algo bonito 
        </button>
        <button onClick={()=>{
          router.push("/list")
        }}>
          Mirar la lista 
        </button>
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

        {cocktails? (<>{cocktails.map((c) => (
                <CocktailCard key={c.idDrink} cocktelin={c}/>
              ))}
            </>): (
            <div>
              No se ha encontrado ningún cocktail con ese nombre
            </div>
          )}

      </div>

    </div>

  )
}
export default Home;