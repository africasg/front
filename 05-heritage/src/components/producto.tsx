'use client'
import type { Comprao } from "@/app/page";
import "./product.css"

type Props = {
    lista:  Comprao[],
    setLista: React.Dispatch<React.SetStateAction<Comprao[]>>
    name:string
};



const Product = ({lista,setLista,name}: Props )=>{

    return(
        <div className="productillo" onClick={()=>{
            setLista([...lista,{name:name, id:String(Math.random())}])
        }}>
            <h1>{name.toUpperCase()}</h1>
        </div>
    )

}

export default Product