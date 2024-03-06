import { useState, useEffect } from 'react'
import './App.css'
import {Carta} from "../components/cards"
import NavbarPokemon from '../components/navbar';
import CartaPokemon from '../components/cartaPokemon';


export default function App() {
 

  const [Pokemon,setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [PokemonSolitario,setPokemonSolitario]=useState();
  const[ubi,setubi]=useState('');
  

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
        const listaDePokemon = await response.json();
        const { results } = listaDePokemon;
        
        const newPokemon = results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const poke = await response.json();
          return poke;
        });

        const pokemonData = await Promise.all(newPokemon);
        setPokemon(pokemonData);
        setLoading(false); // Cambia el estado de loading a false cuando los datos se han cargado correctamente
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setLoading(false); // Cambia el estado de loading a false en caso de error
      }
    };
    getPokemon();
  }, []);
  
  if(loading){
    return  <img className="mx-auto d-block" src="carga.gif"></img>
  }
  return (
    <>
    <body>
    <header ><NavbarPokemon ubi={ubi} setubi={setubi}></NavbarPokemon></header>
   <Carta Pokemon={Pokemon} PokemonSolitario={PokemonSolitario} setPokemonSolitario={setPokemonSolitario}></Carta>
   <CartaPokemon PokemonSolitario={PokemonSolitario} ubi={ubi} setubi={setubi}></CartaPokemon>
    </body>
    
   
    </>
    
  )
}


