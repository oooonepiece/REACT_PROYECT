import { useState, useEffect } from 'react'
import './App.css'
import {CartaPokemon} from "../components/cards"
import NavbarPokemon from '../components/navbar';
 

export default function App() {
 

  const [Pokemon,setPokemon] = useState([]);
  
 
  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      const listaDePokemon = await response.json()
      const { results } = listaDePokemon
 
      const newPokemon = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const poke = await response.json()
        return poke
       
      })
      setPokemon(await Promise.all(newPokemon));
    }
    getPokemon()
  }, [])


  return (
    <>
    
    <NavbarPokemon ></NavbarPokemon>
    <CartaPokemon Pokemon={Pokemon} ></CartaPokemon>
    </>
    
  )
}


