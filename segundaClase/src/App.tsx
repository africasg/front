import { useEffect, useState } from 'react'
import './App.css'
import { api } from './api/api'
import { Character } from './components/character'
import type { CharacterT } from './types'





const  App = () => {

  const [search,setSearch] = useState<string>("");
  const [inputText,setInputText] = useState<string>("")
  const [characters,setCharacters] = useState<CharacterT[]>([]);
  const [loading,setLoading] =useState<boolean>(true); //siempre en true ya que asumimos que siemore va a a estar pensando
  const [error,setError] = useState<string|null> (null);
  // siempre que haya una llamada a API tienen que estar esos tres estados (then catch y finally)
  useEffect(() => {
    search && api.get(`/character?name=${search}`).then(e=>{
      setCharacters(e.data.results)}).catch((e)=>{
        setError(`Error cargando datos: ${e.message ? e.message : e}`)
      }).finally(()=>{
        setLoading(false)
      })
    },[search])
  

 return (
    <div className={`mainContainer ${search ? "withBg" : ""}`}> 
    {/* ESto lo que hace es condicionar: si tienes search será un div"distinto"(es el mismo condicionado) */}
      <div className="searchBar">
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
      <button onClick={() => setSearch(inputText)}> Search </button>
      </div>
      {search && loading && <h1>Loading...</h1>}
      {error && <h2>{error}</h2>}
      <div className='characterContainer'>
        {/* aunque esté aqui guardaado toda la "lógica" y su css estará en el component no? */}
        {characters.map((e) => <Character key={e.id} character={e}/>)}
      </div>

    </div>
  )
}
// siempre tenemos que hacer la salida para cuando salga bien, cuando salga mal y loading

export default App;