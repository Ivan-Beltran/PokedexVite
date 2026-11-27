import { pokemons } from "../data/pokemon";

import { pokemonCard } from "../components/pokemo-card";
import { PokemonFilter, type PokemonFilterValues} from "../components/pokemon.filter";

const normalize = (text: string): string => {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
}

export const PokedexView=():HTMLElement=>{
    const view=document.createElement("div")
    view.className="pokedex"

    const title=document.createElement("h1")
    title.className="pokedex_title"
    title.textContent="Pokedex"
    
    const grid= document.createElement("div")
    grid.className="pokedex__grid"
    
    const count=document.createElement("p")
    count.className="pokedex__count"

    const empty=document.createElement("p")
    empty.className="pokedex__empty"
    empty.textContent="no se encontraron pokemon con estos filtros"

    const render=({name,type}:PokemonFilterValues)=>{
        const query=normalize(name)
        const result=pokemons.filter(
            (p)=> normalize(p.name).includes(query) && (type===""||p.type===type)
        )

        grid.replaceChildren(...result.map(pokemonCard))
        empty.hidden=result.length>0
        count.textContent=`mostrando ${result.length} de ${pokemons.length}`
    }

    const types=[...new Set(pokemons.map((p)=>p.type))].sort()
    const filter=PokemonFilter({types,onFilter:render})

    view.append(title,filter,count,grid,empty)
    render({name:"",type:""})


    return view
}