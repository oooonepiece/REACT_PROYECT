import { useState } from "react";

export default function NavbarPokemon({setBuscar}) {
  

    async function asincrona(buscar){
        const busquedaPikachu=await fetch("https://pokeapi.co/api/v2/pokemon/"+ buscar);
        const busquedaJson=await busquedaPikachu.json()
        setBuscar (busquedaJson)
        
    }

    

    return (
       
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top  bg-opacity-75 ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <form 
                    onSubmit={e =>{
                        e.preventDefault();
                     
                        asincrona(e.target.pika.value)

                    }}
                className="d-flex" role="search">
                        <input name="pika" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                   <img src="../src/assets/media/pikachuCorriendo.gif" width="5%"></img>
                </div>
            </div>
        </nav>
        
        
    )
}