'use client'

import { useLista } from "@/context/ListaContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddToList = ()=>{
    const [inputText,setInputText] = useState("");
    const {addLista} = useLista()
    const router = useRouter()
    return(
        <div>
        <input value={inputText} onChange={(e)=>{
            setInputText(e.target.value);
        }}
        onKeyDown={(e)=>{
            if(e.key === "Enter"){
               addLista(inputText)
               setInputText("")
            }
        }}
        ></input>
        <button onClick={()=>router.push("./addToList/otra")}>Ir a la otra</button>
        </div>
    )
}
export default AddToList;
