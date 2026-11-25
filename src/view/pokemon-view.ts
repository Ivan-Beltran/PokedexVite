import { pokemons } from "../data/pokemon";

import { pokemonCard } from "../components/pokemo-card";

export const PokedexView=():HTMLElement=>{
    const view=document.createElement("div")
    view.className="pokedex"

    const title=document.createElement("h1")
    title.className="pokedex_title"
    title.textContent="Pokedex"
    
    const grid= document.createElement("div")
    grid.className="pokedex__grid"

    pokemons.forEach((pokemon)=>{
        grid.appendChild(pokemonCard(pokemon))
    })

    view.append(title,grid)

    return view
}