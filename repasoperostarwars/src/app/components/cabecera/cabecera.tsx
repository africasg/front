"use client"
import "./cabecera.css"
import { useRouter } from "next/navigation"

const Cabecera = () =>{
    const router = useRouter()
    return(
        <div className="generalCabecera">
            <h1>Archivo de Star Wars</h1>
            <div className="botonCabecera"> <button onClick={()=>(router.push(`/`))}> Home </button></div>
           
        </div>
    )
}
export default Cabecera