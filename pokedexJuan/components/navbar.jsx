
import { useState } from "react";
import CartaBusqueda from "./cartaBusqueda";

export default function NavbarPokemon() {


    const [buscar, setBuscar] = useState('');
    const [pokemon, setPokemon] = useState(null);

    const buscarPokemon = async () => {
        const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${buscar.toLowerCase()}`;
        try {
            const response = await fetch(urlPokemon);
            if (response.ok) {
                const data = await response.json();
                setPokemon(data);
            } else {
                console.error(`Error fetching Pokemon data: ${response.status}`);
            }
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        }
    };



    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black fixed-top  ">
                <div className="container-fluid  ">
                    <img src="../src/assets/media/bola.png" width="3%"></img>
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
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item text-white" href="#">Action</a></li>
                                    <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled text-white" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <img src="../src/assets/media/pikachuCorriendo.gif" width="5%"></img>
                    </div>
                </div>

            </nav>
            {pokemon && 
               <CartaBusqueda pokemon={pokemon}></CartaBusqueda>
            }
            
        </div>

    );
}