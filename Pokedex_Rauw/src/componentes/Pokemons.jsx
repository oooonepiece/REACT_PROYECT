export function CartasIMG({ pokemon }) {
    return (
        <div className="row row-cols-4  mt-2 ">
            {
                pokemon.map((poke) => { 
                    return (
                        <div className="card bg-black bg-opacity-25 text-white rounded-5   mt-5 mx-auto ms-5">
                            <div className="card-body">
                                <p className="card-text rounded-pill border border-danger w-50 mx-auto bg-black mt-4 ">#{poke.id} - {poke.name}</p>
                            </div>
                            <div className="card-img-top h-100">
                            
                                    <img className="h-100 w-100 " src={poke.sprites.other["official-artwork"].front_default}></img>
                                
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}



