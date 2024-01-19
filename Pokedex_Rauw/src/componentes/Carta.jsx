export function CartaForm({Pokedex}) {
    return (
        <div>
            <div className="card bg-secondary bg-opacity-25 text-white">
                {typeof Pokedex.name != "undefined" ?
                    <img src={Pokedex.sprites.other.dream_world.front_default} className=".img_hover" />
                    :
                    ' '
                }
                <div className="card-body">
                    <h1>{Pokedex.name}</h1>
                </div>
            </div>
        </div>
    )
}