export interface PokemonFilterValues{
    name:string
    type:string
}

interface PokemonFilterProps{
    types:string[]
    onFilter:(filters:PokemonFilterValues)=>void
}

export const PokemonFilter=({types,onFilter}:PokemonFilterProps):HTMLElement=>{
    const container=document.createElement("div")
    container.className="pokemon-filter"

    const search=document.createElement("input")
    search.className="pokemon-filter__search"
    search.placeholder="Buscar pokemon por nombre"
    search.setAttribute("aria-label", "buscar por nombre")

    const select=document.createElement("select")
    select.className="pokemon-filter__select"
    select.setAttribute("aria-label","filtra por tipo")

    const allOption=document.createElement("option")
    allOption.value=""
    allOption.textContent="todos los tipos"
    select.appendChild(allOption)

    types.forEach((type)=>{
        const option=document.createElement("option")
        option.value=type
        option.textContent=type
        select.appendChild(option)
    })

    const clear=document.createElement("button")
    clear.className="pokemon-filter__clear"
    clear.type="button"
    clear.textContent="limpiar"

    const applyFilters=()=>{
        onFilter({name:search.value.trim(),type:select.value})
        clear.disabled=search.value===""&&select.value===""
    }

    search.addEventListener("input",applyFilters)
    select.addEventListener("change",applyFilters)
    clear.addEventListener("click",()=>{
        search.value=""
        select.value=""
        applyFilters()
        search.focus()
    })

    clear.disabled=true
    container.append(search,select,clear)

    return container
}