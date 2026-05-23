"use client"
import "./globals.css"
import { useRouter } from "next/navigation";



const Home = () => {
  const router = useRouter()

  return(
    <div className="generalPrincipal">
      <div className="botonesPrincipales">
      <button onClick={()=> router.push(`/characters`)}> Personajes </button>
      <button onClick={()=> router.push(`/planets`)}> Planetas </button>
      <button onClick={()=> router.push(`/starships`)}> Naves </button>
    </div>
    <img src={"Star_wars2.svg"}></img>
    </div>
  )
}

export default Home 