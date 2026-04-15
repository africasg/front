'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ListaContextType = {
    lista: string[],
    addLista : (item:string) => void;
    deleteFromLista : (item:string) => void ;
}
// lo que tipamos en un contexto se tiene que llamar igual en todas partes 

const ListaContext = createContext<ListaContextType | null>(null)

export const ListaProvider = ({children}: {children:ReactNode}) =>{
    // tiene que llamarse exactamente igual que lo que hemos tipado arriba 
    const [lista, setLista] = useState<string[]>([])

    useEffect(()=>{
            const stored = localStorage.getItem('listilla') as string | null;
            const arrayStored = stored ? stored.split(',') : [];
            if(stored){
                setLista(arrayStored) 
            }
            // cada vez que se ejecute provider, si existe listilla en stored lo setteo al estado 
    },[])

    useEffect(()=>{
        localStorage.setItem('listilla', String(lista))
    },[lista])

    const addLista = (item:string) => {
        setLista([...lista,item]);
    };

    const deleteFromLista = (item:string) =>{
        setLista(lista.filter(x=> x !== item))
    };

    return (
        <ListaContext.Provider value={{lista,addLista,deleteFromLista}}>
                {children}

        </ListaContext.Provider>
    )
}

export const useLista = () => {
    const context = useContext(ListaContext);
    if(!context){
        throw new Error("tsx out of lista context");

    }
    return context;
}

