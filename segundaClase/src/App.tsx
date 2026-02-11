import { useEffect, useState } from 'react'
import './App.css'
import { api } from './api/api'
import { Character } from './components/character'
import type { CharacterT } from './types'





const  App = () => {

  const [search,setSearch] = useState<string>("");
  const [inputText,setInputText] = useState<string>("")
  const [characters,setCharacters] = useState<CharacterT[]>([]);
  
    useEffect(() => {
    search && api.get(`characterName?name=${search}`).then(e=>{
      setCharacters(e.data.results)})
    },[search])
  

 return (
    <div className='mainContainer'>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
      <button onClick={() => setSearch(inputText)}> Search </button>
      <div className='characterContainer'>
        {characters.map((e) => <Character key={e.id} character={e}/>)}
      </div>

    </div>
  )
}

export default App;