export function CartasIMG({ pokemon }) {
    return (
        <div className="row row-cols-3  mt-2 ">
            {
                pokemon.map((poke) => {
                    return (
                        <div className="card bg-secondary bg-opacity-25 text-white rounded-4 mt-2">
                            <div className="card-body">
                                <p className="card-text">#{poke.id}</p>
                                <p className="card-text">{poke.name}</p>
                            </div>
                            <div className="card-img-top h-75">
                                <img className="h-100 w-75" src={poke.sprites.other.dream_world.front_default}></img>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}



