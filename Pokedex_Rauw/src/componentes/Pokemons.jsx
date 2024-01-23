export function CartasIMG({ pokemon }) {
    return (
        <div className="row d-flex  mt-2 ">
            {
                pokemon.map((poke) => { 
                    return (
                        <div className="card bg-secondary bg-opacity-25 text-white rounded-4 mt-5 w-25 ms-5 mx-auto  ">
                            <div className="card-body">
                                <p className="card-text">#{poke.id} - {poke.name}</p>
                            </div>
                            <div className="card-img-top h-75">
                            
                                    <img className="h-100 w-75" src={poke.sprites.other["official-artwork"].front_default}></img>
                                
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}



