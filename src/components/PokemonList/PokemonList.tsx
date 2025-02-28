import axios from "axios";
import { Container } from "./PokemonListStyle";
import { useEffect, useState } from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";

interface IPokemon {
  name: string;
}

export function PokemonList() {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  async function getPokemonsData() {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setPokemonList(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar dados dos Pokémon:", error);
    }
  }

  useEffect(() => {
    getPokemonsData();
  }, []);

  return (
    <>
      <Container>
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} />
        ))}
      </Container>
    </>
  );
}
