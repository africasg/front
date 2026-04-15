import { Cocktail } from "@/types";
import { api } from "./axios"
export const getCocktails = async() => {
  const respuesta = await api.get<Cocktail[]>("/search.php?s=margarita")
  return respuesta;
}
export const getCocktailById = async (id:number) => {
  const respuesta = await api.get(`/lookup.php?i=${id}`)
  return respuesta;
}
