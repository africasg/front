"use client"
import Image from "next/image";
import styles from "./globals.css";
import { useRouter } from "next/navigation";

const Home=()=> {
  const router = useRouter()
  return (
 <div className="general">
  <div className="botonesGeneral">
   <button onClick={()=>{router.push(`/character`)}}>Personajes</button>
   <button onClick={()=>{router.push(`/locations`)}}>Localizaciones</button>
   <button onClick={()=>{router.push(`/episodes`)}}>Episodios</button>
   <img ></img>
  </div>
 </div>
  )
}
export default Home