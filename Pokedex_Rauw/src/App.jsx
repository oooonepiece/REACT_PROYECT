import { useEffect, useState } from 'react'
import './App.css'
import { BuscarPOkemon } from './componentes/Formulario'
import { CartaForm } from './componentes/Carta'
import { CartasIMG } from './componentes/Pokemons'
import React from "react"
import { InfomacionPoke } from './componentes/Estadisticas'


const api = {
  base: "https://pokeapi.co/api/v2/pokemon"
}

function App() {
  const [buscar, setBuscar] = useState('')
  const [Pokedex, setPokedex] = useState('')

  const buscarPressed = () => {
    fetch(`${api.base}/${buscar}`)
      .then((res) => res.json())
      .then((result) => {
        setPokedex(result);
        console.log(result)
      });

  }
  const [pokemon, setPokemon] = useState([])
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
      <div>
        <BuscarPOkemon setBuscar={setBuscar} buscarPressed={() => buscarPressed}></BuscarPOkemon>
    
        <InfomacionPoke Pokedex={Pokedex}></InfomacionPoke>        
      </div>
      <div >
        <CartasIMG pokemon={pokemon}></CartasIMG>
      </div>
      
    </>
  )
}

export default App
