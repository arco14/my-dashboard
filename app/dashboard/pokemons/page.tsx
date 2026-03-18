import { PokemonsResponse, SimplePokemons } from "@/app/dashboard/pokemons";
import { PokemonGrid } from './components/PokemonGrid';

const getPokemons = async (limit = 20, offset = 0):Promise<SimplePokemons[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(res => res.json())
  
  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))

  return pokemons

}
export default async function PokemonsPage() {
  const pokemons = await getPokemons(50)
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-center">Listado de pokemon <small>estático</small></span>
      <PokemonGrid pokemons={ pokemons } />
    </div>
  );
}