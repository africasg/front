import { api } from "./axios";
import { Movie } from "@/app/types";

export const getMovieByGenre= async (genre:string) =>{
    const respuesta = await api.get<Movie>(`/genre/${genre}`)
    return respuesta;
}