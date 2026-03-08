import { Cocktail } from "@/types";
import { api } from "./axios";

export const getCocktailById= async (id:number) =>{
    const respuesta = await api.get(`lookup.php?i=${id}`)
    return respuesta;
}