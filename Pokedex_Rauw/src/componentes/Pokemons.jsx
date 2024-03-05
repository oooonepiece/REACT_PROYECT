export function CartasIMG({ pokemon, pokemonSolitario, setPokemonSolitario }) {

    if (pokemonSolitario) {
        return
        <>

        </>
    }

    function abreteSesamo(poke) {
        setPokemonSolitario(poke);
    }

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row--xcolsl-3 mx-auto">
            {
                pokemon.map((poke) => {

                    return (
                        <div className="p-3">
                            <div onClick={() => abreteSesamo(poke)} className="card bg-black bg-opacity-25 text-white rounded-5 mt-5 mx-auto">
                                <div className="card-body ">
                                    <p className="card-text rounded-pill border border-danger w-50 mx-auto bg-black mt-4 ">#{poke.id} - {poke.name}</p>
                                </div>
                                <div className="card-img-top h-100">

                                    <img className="h-100 w-100 " src={poke.sprites.other["official-artwork"].front_default}></img>


                                </div>
                            </div>

                        </div>


                    )
                })
            }
        </div>
    )
}



