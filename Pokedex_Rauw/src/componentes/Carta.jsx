export function CartaForm({Pokedex}) {
    return (
        <div className=" row mx-auto ">
            <div className="card bg-secondary bg-opacity-25 text-white">
                {typeof Pokedex.name != "undefined" ?
                    <img src={Pokedex.sprites.other["official-artwork"].front_default} className=" w-25 h-75  mx-auto " />
                    :
                    ' '
                }
               <h1 className="mx-auto mt-4">{Pokedex.name}</h1>
               
            </div>
        </div>
    )
}