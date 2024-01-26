export function CartaPokemon({ Pokemon }) {
   
    return (
        <div className="row row-cols-6  mt-2 ">
            {
                Pokemon.map((poke) => {
                    return (
                        <div className="card bg-black bg-opacity-75 text-white    mt-5  ms-5  ">
                            <p className="card-text  w-50 mx-auto  mt-4 text-center ">Id. {poke.id} </p>
                            <div className="card-body">
                            <img className="h-100 w-100 " src={poke.sprites.other["official-artwork"].front_default}></img>
                            <p className="card-text  w-50 mx-auto  mt-2 text-center ">{poke.name} </p>
                            </div>
                            <div className="card-img-top h-100">
                           
                                    
                               
                               
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}