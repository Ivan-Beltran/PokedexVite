import type { Pokemon } from "../data/pokemon";

export const pokemonCard=(pokemon:Pokemon):HTMLElement=>{
    const card=document.createElement("div")
    card.className='pokemon-card'
    card.dataset.type=pokemon.type

    card.innerHTML=`
        <span class="pokemon-card__id">#${String(pokemon.id).padStart(3,"0")}</span>
        <img class="pokemon-card__img" src="${pokemon.image}" alt="${pokemon.name}" loading="lazy" />
        <h3 class="pokemon-card__name">${pokemon.name}</h3>
        <span class="pokemon-card__type">${pokemon.type}</span>
        
    `

    return card
    
}