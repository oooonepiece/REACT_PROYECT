export function CartaForm({Pokedex}) {
    return (
        <div className=" row mx-auto ">
            <div className="card bg-black bg-opacity-25 text-white">
                {typeof Pokedex.name != "undefined" ?
                    <img src={Pokedex.sprites.other["official-artwork"].front_default} className=" w-25 h-75  mx-auto rounded-circle bg-danger px-4 py-4  mt-4 mb-4 border border-black " />
                    :
                    ' '
                }
                {typeof Pokedex.name != "undefined" ?
                    <h1 className="mx-auto rounded-pill border border-danger px-3 py-2 bg-black mt-4">{Pokedex.name}</h1>
                :

                ' '}
               
               
            </div>
        </div>
    )
}