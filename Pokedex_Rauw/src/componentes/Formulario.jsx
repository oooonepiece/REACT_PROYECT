import React from "react"
import { useState } from "react"

const api = {
    base: "https://pokeapi.co/api/v2/pokemon"
}

export function BuscarPOkemon() {
    const [buscar, setBuscar] = useState('')
    const [Pokedex, setPokemon] = useState('')

    const buscarPressed = () => {

        fetch(`${api.base}/${buscar}`)
            .then((res) => res.json())
            .then((result) => {
                setPokemon(result);
            });
    }

    return (
        <>
            <div className='container-fluid d-flex mb-2'>
                <input type="text " className="form-control bg-secondary text-white" placeholder="Nombre de Pokemon"
                    onChange={(e) => setBuscar(e.target.value)} />
                <button onClick={buscarPressed} type="submit" className="btn btn-secondary  ms-3">𝔹𝕦𝕤𝕔𝕒𝕣</button>
            </div>

            <div>
                <div class="card bg-secondary bg-opacity-25 text-white">
                    {typeof Pokedex.name != "undefined" ?
                        <img src={Pokedex.sprites.other.dream_world.front_default} className=".img_hover"/>
                        :
                        ' '
                    }
                    <div class="card-body">
                        <h1>{Pokedex.name}</h1>                    
                    </div>
                </div>
            </div>
        </>

    )
}
