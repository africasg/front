import { api } from "./axios";
import { Movie } from "@/app/types";

export const getMovieById= async (id:number) =>{
    const respuesta = await api.get<Movie>(`/${id}`)
    console.log(respuesta)
    return respuesta;
}