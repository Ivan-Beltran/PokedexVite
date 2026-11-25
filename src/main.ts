import './style.css'
import { PokedexView } from './view/pokemon-view'

const app=document.querySelector<HTMLDivElement>("#app")

if(app){
  app.append(PokedexView());
}
