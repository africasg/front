'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ListaContextType = {
    lista: number[],
    addLista: (item: number) => void;
    deleteFromLista: (item: number) => void;
};

const ListaContext = createContext<ListaContextType | null>(null);

export const ListaProvider = ({ children }: { children: ReactNode }) => {

    const [lista, setLista] = useState<number[]>([]);

    useEffect(() => {
    const stored = localStorage.getItem('listilla');

    if (stored) {
        const arrayStored = stored.split(",").map(Number);
        setLista(arrayStored);
    }
    }, []);

    
    useEffect(() => {
    localStorage.setItem('listilla', lista.join(","));
    }, [lista]);
    
    const addLista = (item:number) => {
    setLista(prev => [...prev, item]);
    };

    const deleteFromLista = (item: number) => {
        setLista(prev => prev.filter(x => x !== item));
    };

    return (
        <ListaContext.Provider value={{ lista, addLista, deleteFromLista }}>
            {children}
        </ListaContext.Provider>
    );
};

export const useLista = () => {
    const context = useContext(ListaContext);
    if (!context) {
        throw new Error("tsx out of lista context");
    }
    return context;
};