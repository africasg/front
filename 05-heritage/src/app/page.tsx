'use client'


import "./page.css"
import { useState } from "react";
import Product from "@/components/producto";
export type Comprao = {
    name:string;
    id:string;
  }
const Home = () => {
  
  const [lista,setLista] = useState<Comprao[]>([]);
  const productos = ["tebeo","laserdisc","pc"]

  return (
<div className="page">
  <div>
    {lista.map((e)=> (
    <div>
    <h2 onClick={()=>{
      setLista(lista.filter(x=>x.id !== e.id));
    }} className="seEliminara" key={e.id}>{e.name}</h2>
   
    </div>
  ))}
  
  </div>
  <h2> Productos a comprar: </h2>
  {productos.map((e)=>(
    <Product key={e} name={e} lista={lista} setLista={setLista}/>
  ))}
</div>

  );
}

export default Home;