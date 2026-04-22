"use client";

import { api } from "@/api/api";
import CharacterChulo from "@/app/components/CharacterChulo";
import { ResultCharacters } from "@/app/types/RicardoyMortirio";
import { useEffect, useState } from "react";
import Paginador from "@/app/components/Paginador"; 
import { Fascinate } from "next/font/google";

const PageCharacters = () => {
  const [resultCharacters, setResultCharacters] = useState<ResultCharacters | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1); 

  const getCharacters = async (page: number) => {
    try {
      api.get(`/character/?page=${page?1:page}`).then((e)=>{
        const{data}:{data:ResultCharacters}=e;
        setResultCharacters(data);
        setLoading(false)
      }).finally(()=>{
        setLoading(false)
      })
    }catch(e: any) {
      setError(String(e));
      }
      
  }

  useEffect(() => {
    getCharacters(page);
  }, [page]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Personajitos</h1>

      {resultCharacters && resultCharacters?.results.map((e) => (
        <CharacterChulo key={e.id} character={e} />
      ))}

      <Paginador
        page={page}
        next={!!resultCharacters?.info.next}
        prev={!!resultCharacters?.info.prev}
        setPage={setPage}
        />
    </div>
  );
};

export default PageCharacters;