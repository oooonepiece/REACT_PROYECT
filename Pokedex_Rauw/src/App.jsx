import { useEffect, useState } from 'react'
import './App.css'
import { BuscarPOkemon } from './componentes/Formulario'
import { CartaForm } from './componentes/Carta'
import { CartasIMG } from './componentes/Pokemons'
import React from "react"
import { InfomacionPoke } from './componentes/Estadisticas'
import CartaSingle from './componentes/CartaSingle'

const api = {
  base: "https://pokeapi.co/api/v2/pokemon"
}

function App() {

  const [buscar, setBuscar] = useState('')
  const [Pokedex, setPokedex] = useState('')

  const [pokemon, setPokemon] = useState([])

  const [buscarArea,setBuscarArea] = useState('')
  const [ubi, setubi] = useState('');

  const [evos, setEvos] = useState([]);
  const [evoluciones, setEvoluciones] = useState([]);
  
  const [pokemonSolitario,setPokemonSolitario] = useState();

  const buscarPressed = () => {
     fetch(`${api.base}/${buscar}`)
      .then((res) => res.json())
      .then((result) => {
        setPokedex(result);
      });

    fetch(`${api.base}/${buscarArea}/encounters`)
    .then((res) => res.json())
    .then((result) => {
      setubi(result);
    });

    fetch(`${api.base}-species/${evos}/`)
    .then((res) => res.json())
    .then((result) => {
       fetch(`${result.evolution_chain.url}`)
       .then((res) => res.json())
       .then((resultado) => {
        setEvoluciones(resultado);
        console.log(resultado);
       });
    });

    
  }
 

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
      <div className='pb-2'>
        <BuscarPOkemon setBuscar={setBuscar} setBuscarArea={setBuscarArea} setEvos={setEvos} buscarPressed={() => buscarPressed} ></BuscarPOkemon>

        
        {Pokedex ?<CartaForm Pokedex={Pokedex} pokemonSolitario={pokemonSolitario}></CartaForm> :""}

        {Pokedex && ubi && evoluciones?<InfomacionPoke  Pokedex={Pokedex} ubi={ubi} evoluciones={evoluciones} pokemonSolitario={pokemonSolitario}></InfomacionPoke> :""}
                
      </div>
      <div>
          <CartasIMG pokemon={pokemon} pokemonSolitario={pokemonSolitario} setPokemonSolitario={setPokemonSolitario} ></CartasIMG>
          <CartaSingle pokemonSolitario={pokemonSolitario} ubi={ubi} setubi={setubi} pokemon={pokemon}></CartaSingle>
      </div>
      
    </>
  )
}

export default App


