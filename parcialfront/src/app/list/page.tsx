"use client";

import { useLista } from "../context/ListaContext";
import { useEffect, useState } from "react";
import { CocktailCard } from "@/components/cocktailCard/page";
import type { Cocktail } from "@/types";
import { getCocktailById } from "@/lib/api/cocktail";

const ListPage = () => {
  const { lista } = useLista();
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await Promise.all(
        lista.map(async (id) => {
          const res = await getCocktailById(id);
          return res.data.drinks ? res.data.drinks[0] : null;
        })
      );

      // 🔥 filtrar nulls
      setCocktails(results.filter(Boolean));
    };

    if (lista.length > 0) {
      fetchData();
    } else {
      setCocktails([]);
    }

  }, [lista]);

  return (
    <div>
      <h1>Mi lista de cocktails</h1>

      {cocktails.length === 0 ? (
        <p>No hay cocktails en la lista</p>
      ) : (
        <div>
          {cocktails.map((c) => (
            <CocktailCard key={c.idDrink} cocktelin={c} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListPage;