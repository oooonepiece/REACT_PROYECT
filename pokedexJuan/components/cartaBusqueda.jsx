import React from "react"
 const CartaBusqueda =({pokemon})=>{
    return(
    <div className=" row row-cols-6 card bg-black bg-opacity-75 text-white mt-5  ms-5  ">
                    <p className="card-text  w-50 mx-auto  mt-4 text-center ">Id. {pokemon.id} <br></br><br></br><br></br>
                    habilidades: {pokemon.name}</p>

                    <div className="card-body">
                        <img className="h-100 w-100 " src={pokemon.sprites.other["official-artwork"].front_default}></img>
                        <p className="card-text  w-50 mx-auto  mt-2 text-center ">{pokemon.name} </p>
                    </div>
                    <div className="card-img-top h-100">
                    </div>
                </div>

    );
    
};
export default CartaBusqueda;