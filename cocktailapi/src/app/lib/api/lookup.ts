import { Cocktail } from "@/app/types";
import { api } from "./axios";

export const AllCocktails = async () =>{
    const respuesta = await api.get<Cocktail>(`search.php?f=a`)
    return respuesta;
}