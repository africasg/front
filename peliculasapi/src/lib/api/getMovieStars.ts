import { api } from "./axios";
import { Movie } from "@/app/types";

export const getMovieByStars= async (stars:number) =>{
    const respuesta = await api.get<Movie[]>(`/stars/${stars}`)
    return respuesta;
}