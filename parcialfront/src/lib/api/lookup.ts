
import { api } from "./axios"
export const getRandomCocktail = async () => {
  const respuesta = await api.get("/random.php")
  return respuesta;
}