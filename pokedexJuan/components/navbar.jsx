
import { useState } from "react";
import CartaBusqueda from "./cartaBusqueda";

export default function NavbarPokemon({ubi,setubi}) {


    const [buscar, setBuscar] = useState('');
    const [pokemon, setPokemon] = useState(null);
    

    const buscarPokemon = async () => {
        const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${buscar.toLowerCase()}`;
        try {
            const response = await fetch(urlPokemon);
            if (response.ok) {
                const data = await response.json();
                setPokemon(data);
                window.scrollTo(0, 0);
            } else {
                console.error(`Error fetching Pokemon data: ${response.status}`);
            }
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        }
    };



    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black fixed-top">
                <div className="container-fluid">
                    
                   <img className="d-none d-lg-block" src="bola.png" width="3%"></img>
                       
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                        }}
                        className="d-flex ms-3 " role="search">
                        <input onChange={(e) => setBuscar(e.target.value)} name="pika" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={buscarPokemon} className="btn btn-outline-primary" type="submit">buscar</button>
                    </form>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-4 " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="../index.html">Home</a>
                            </li>
                           
                           
                           
                        </ul>
                        <img src="pikachuCorriendo.gif" width="5%"></img>
                    </div>
                </div>

            </nav>
            {pokemon && 
               <CartaBusqueda pokemon={pokemon} ubi={ubi} setubi={setubi}></CartaBusqueda>
            }
            
        </div>

    );
}