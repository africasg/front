'use client'

import { useState } from "react";
import { useLista } from "../context/ListaContext";
import { api } from "@/lib/api/axios";

const AddToList = () => {
  const [inputText, setInputText] = useState("");
  const { addLista } = useLista();

  const handleAdd = async () => {
    if (!inputText) return;

    try {
      const res = await api.get(`/search.php?s=${inputText}`);
      const drink = res.data.drinks?.[0];

      if (drink) {
        addLista(drink.idDrink); // ✅ guardamos ID
      }

      setInputText("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />
    </div>
  );
};

export default AddToList;