import { useEffect, useState } from 'react'
import './App.css'
import { BuscarPOkemon } from './componentes/Formulario'
import { CartaForm } from './componentes/Carta'
import { Pokemons } from './componentes/Pokemons'
import React from "react"


const api = {
  base: "https://pokeapi.co/api/v2/pokemon"
}

function App() {
  const [buscar, setBuscar] = useState('')
  const [Pokedex, setPokemon] = useState('')

  const buscarPressed = () => {
    fetch(`${api.base}/${buscar}`)
      .then((res) => res.json())
      .then((result) => {
        setPokemon(result);
        console.log(result)
      });

  }
  const[listPokemon, setListPokemon] = useState([])
  useEffect(() => {
    const getListPokemon = async () => {

      const url = await fetch(`https://pokeapi.co/api/v2/pokemon/kanto`)
      const listaPokemon = await url.json()
      const { pokemon_entries } = listaPokemon


      const listaPokemonResult = pokemon_entries.map(async (pokemon) => {
        const auxPokemon = await fetch(`${pokemon.pokemon_name}`)
        const resultPokemon = await auxPokemon.json()

        return resultPokemon
      })

      const resultadoCompleto = await Promise.all(listaPokemonResult).then( resultados => resultados.map((result) => {

      }))
      
      setListPokemon(resultadoCompleto)
    }
    getListPokemon()
  }, [])

  return (
    <>
      <BuscarPOkemon setBuscar={setBuscar} buscarPressed={() => buscarPressed}></BuscarPOkemon>
      <CartaForm Pokedex={Pokedex}></CartaForm>
    </>
  )
}

export default App
