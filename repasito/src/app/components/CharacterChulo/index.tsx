"use client"

import { Character } from "@/app/types/RicardoyMortirio";
import "./styles.css";

const CharacterChulo = ({ character }: { character: Character }) => {
  return (
    <div className="ContainerCharacterChulo">
      <img src={character.image}/>
      <div className="InfoContainer"/>
      <h1>{character.name}</h1>
      <p>{character.status} - {character.species}</p>
    </div>
  );
};

export default CharacterChulo;