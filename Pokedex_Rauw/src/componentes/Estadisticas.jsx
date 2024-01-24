

export function InfomacionPoke({ Pokedex }) {

    function PoderTotal(stats){
        stats.reduce(function(a,b){
        return a.base_stat + b.base_stat
       });
    }


    return (
        <>
            <div className=" row mx-auto ">
                <div className="card  bg-black bg-opacity-25 text-white">
                    <div className="card w-25 mx-auto ">
                        <h1>Estadisticas</h1>
                        {typeof Pokedex.name != "undefined" ?
                            <div className="d-flex align-items-start flex-column ps-3">
                                <p>#{Pokedex.id}</p>
                                <p>Nombre: {Pokedex.name}</p>
                                <p>Habilidades: {Pokedex.abilities[0].ability.name} , {Pokedex.abilities[1].ability.name}</p>
                                <p>Tipo: {Pokedex.types[0].type.name}</p>
                                <p>Movimientos : {Pokedex.moves[0].move.name}</p>
                                <div className="d-flex">
                                    <p className="ms-2">Altura : {Pokedex.height}</p>
                                    <p className="ms-2">Peso : {Pokedex.weight}</p>  
                                </div>
                                
                                <div>
                                    <div className="d-flex">
                                        <p className="ms-2">{Pokedex.stats[0].base_stat} - {Pokedex.stats[0].stat.name}</p>
                                        <p className="ms-2">{Pokedex.stats[1].base_stat} - {Pokedex.stats[1].stat.name}</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="ms-2">{Pokedex.stats[2].base_stat} - {Pokedex.stats[2].stat.name}</p>
                                        <p className="ms-2">{Pokedex.stats[5].base_stat} - {Pokedex.stats[5].stat.name}</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="ms-2">{Pokedex.stats[3].base_stat} - {Pokedex.stats[3].stat.name}</p>
                                        <p className="ms-2">{Pokedex.stats[4].base_stat} - {Pokedex.stats[4].stat.name}</p>
                                    </div>
                                </div>
                                <p>Puntuación total de estadísticas: {Pokedex.stats.reduce((a,b) => a.base_stat + b.base_stat,0)}</p>

                            </div>
                            :
                            ' '
                        }
                    </div>
                </div>
            </div>
        </>
    )
}