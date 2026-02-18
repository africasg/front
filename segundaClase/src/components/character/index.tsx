import './style.css'
import type { CharacterT } from '../../types'
import { useEffect, useState } from 'react'
import { api } from '../../api/api';
// responsable de llamar a la api para recolectar toda la info del personaje
export const Character=(params:{id?:string,character?:CharacterT})=>{
// si me pasas el personaje completo, haz que sea el personaje ENTERO (por eso hacemos lo de despues de id y params)
    const id = params.id;
    const paramCharacter = params.character
    const [character,setCharacter] = useState<CharacterT|null>(paramCharacter ? paramCharacter:null);
   
    useEffect(()=>{
            id && api.get(`/character/${id}`).then((res)=>{
                setCharacter(res.data);
            });
    },[id]);
   

    return(
        <>
       {character ? (<div className="characterContainer">
            <img src={character?.image}/>
            <div className='characterDataContainer'>
                <p>Nombre:{character?.name}</p>
                <p>Origen:{character?.origin.name}</p>
                <p>Estado:{character?.status}</p>
            </div>
        </div>) : (<h1>Loading...</h1>)}
        </>
        // los corchangulos vacios son como una especie de promesa de que lo del interior será html, ya que al hacer lo de character && y el div grande tenemos que hacer que existe el character

    )
}