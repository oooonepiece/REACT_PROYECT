import { useEffect, useState } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group";
export function InfomacionPoke({ Pokedex, ubi, evoluciones }) {


    const array = [];
    function extraerMovs() {
        {
            typeof Pokedex.name != "undefined" ?
                <>
                    {
                        Pokedex.moves.map((a) => {
                            array.push(a.move.name)

                        })
                    }
                </>
                : ""
        }
    }
    function extraerZonas() {
        let zonasCaps = [];
        if (typeof ubi !== "undefined" && Array.isArray(ubi)) {
            ubi.forEach((a) => {

                if (a && a.location_area && a.location_area.name) {
                    zonasCaps.push(`${a.location_area.name} | `);
                }
            });
        }

        return zonasCaps;
    }

    extraerMovs();
    extraerZonas();

    const arrayOfWords = array

    const [movimientosCounter, setMovimientosCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMovimientosCounter((currentValue) => {
                if (currentValue + 1 === arrayOfWords.length) {
                    return 0
                }
                return currentValue + 1;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const pokemonSinAbility = [11, 151, 14, 144, 145, 146, 150, 151, 200, 243, 244, 245, 249, 250,
        251, 377, 378, 379, 380, 381, 382, 385, 386, 480,
        481, 482, 483, 484, 485, 486, 487, 488, 489, 490,
        491, 492, 493, 494, 647, 648, 649, 716, 717, 718,
        719, 720, 721, 785, 786, 787, 788, 789, 790, 791,
        792, 793, 794, 795, 796, 797, 798, 799, 800, 801,
        802, 803, 804, 805, 806, 807, 10034]
    const pokemonsLegendarios = [144, 145, 146, 150, 151, 243, 244, 245, 249, 250,
        251, 377, 378, 379, 380, 381, 382, 385, 386, 480,
        481, 482, 483, 484, 485, 486, 487, 488, 489, 490,
        491, 492, 493, 494, 647, 648, 649, 716, 717, 718,
        719, 720, 721, 785, 786, 787, 788, 789, 790, 791,
        792, 793, 794, 795, 796, 797, 798, 799, 800, 801,
        802, 803, 804, 805, 806, 807]

    const [evo1, setEvo1] = useState([''])

    {
        typeof evoluciones.chain != 'undefined' ?
            <>
                {
                    fetch(`https://pokeapi.co/api/v2/pokemon/${evoluciones.chain.species.name}`)
                        .then((res) => res.json())
                        .then((result) => {
                            setEvo1(result);
                        })
                }
            </>
            : ""
    }

    const [evo2, setEvo2] = useState([''])
    {
        typeof evoluciones.chain != 'undefined' ?
            <>
                {typeof evoluciones.chain.evolves_to[0] != 'undefined' ?
                    <>
                        {
                            fetch(`https://pokeapi.co/api/v2/pokemon/${evoluciones.chain.evolves_to[0].species.name}`)
                                .then((res) => res.json())
                                .then((result) => {
                                    setEvo2(result);
                                    console.log(result);
                                })
                        }
                    </>
                    : ""}

            </>

            : ""
    }

    const [evo3, setEvo3] = useState([''])

    {typeof evoluciones.chain != 'undefined' ?
    <>
        {typeof evoluciones.chain.evolves_to[0] != 'undefined' ?
            <>
                {typeof evoluciones.chain.evolves_to[0].evolves_to[0] != 'undefined' ?
                    <>
                        {typeof evoluciones.chain.evolves_to[0] != 'undefined' ?
                    <>
                        {
                            fetch(`https://pokeapi.co/api/v2/pokemon/${evoluciones.chain.evolves_to[0].evolves_to[0].species.name}`)
                                .then((res) => res.json())
                                .then((result) => {
                                    setEvo3(result);
                                    console.log(result);
                                })
                        }
                    </>
                    : ""}

                    </>


                    : ""}
            </>

            : ""}

    </>

    : ""}


    return (
        <>
            <div className="row mx-auto ">
                <div className="card bg-black bg-opacity-25 text-white ">
                    <div className="d-flex">
                        <div className="card w-50 mx-auto rounded-2 bg-black bg-opacity-75 text-white mt-2 mb-3 border border-danger">
                            <h1>Estadísticas</h1>
                            {typeof Pokedex.name != "undefined" ?
                                <div className="d-flex align-items-start flex-column ps-2">
                                    <p>id: #{Pokedex.id}</p>
                                    <p>Nombre: {Pokedex.name}</p>

                                    {typeof Pokedex.abilities != "undefined" ?
                                        <>
                                            {!pokemonSinAbility.includes(Pokedex.id) ?
                                                <> {Pokedex.abilities[0].ability.name} , {Pokedex.abilities[1].ability.name}</>
                                                : <p className="ps-2">No se han encontrado habilidades</p>}

                                        </>
                                        : ''}

                                    <p>Tipo: {Pokedex.types[0].type.name}</p>
                                    <div className="d-flex">
                                        <p className="fw-bold">Altura: {Pokedex.height}</p>
                                        <p className="ms-2 fw-bold">Peso: {Pokedex.weight}</p>
                                    </div>

                                    <div>
                                        <div className="d-flex">
                                            <p className="fw-bold">{Pokedex.stats[0].base_stat} - {Pokedex.stats[0].stat.name}</p>
                                            <p className="ms-2 fw-bold">{Pokedex.stats[1].base_stat} - {Pokedex.stats[1].stat.name}</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="fw-bold">{Pokedex.stats[2].base_stat} - {Pokedex.stats[2].stat.name}</p>
                                            <p className="ms-2 fw-bold">{Pokedex.stats[5].base_stat} - {Pokedex.stats[5].stat.name}</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="fw-bold">{Pokedex.stats[3].stat.name}: {Pokedex.stats[3].base_stat}</p>
                                            <p className="ms-2 fw-bold">{Pokedex.stats[4].stat.name}: {Pokedex.stats[4].base_stat}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <p>P.total de estadísticas:</p>
                                        <p className="ms-2 fw-bold">{Pokedex.stats.map((a, b) => (a.base_stat + (b - b))).reduce((a, b) => a + b)} Pts.</p>

                                    </div>
                                    <div className=" d-flex">
                                        <p>Movimientos:</p>
                                        <p className="ms-2 fw-bold">

                                            <SwitchTransition>
                                                <CSSTransition classNames="fade" key={arrayOfWords[movimientosCounter]} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
                                                    <div className=" ">
                                                        {arrayOfWords[movimientosCounter]}
                                                    </div>
                                                </CSSTransition>
                                            </SwitchTransition>
                                        </p>
                                    </div>

                                    <div className="d-flex">
                                        <p>Zona de Captura: </p>
                                        <p className="ms-2 fw-bold">{extraerZonas() == 0 ? <p>es una evolucion</p> : extraerZonas()}</p>
                                    </div>
                                </div>
                                :
                                ' '
                            }
                        </div>
                        <div className="card w-50 mx-auto rounded-2 bg-black bg-opacity-75 text-white mt-2 mb-3 border border-danger">
                            <h1>Evoluciones</h1>
                            <div>
                                {typeof evoluciones.chain != 'undefined' ?
                                    <>
                                        {!pokemonsLegendarios.includes(Pokedex.id) ?
                                            <>
                                                <p className="text-white">
                                                    {evoluciones.chain.species.name
                                                    }</p>
                                                <div>
                                                    {typeof evo1.sprites != 'undefined' ?
                                                        <img src={evo1.sprites.other["official-artwork"].front_default} className=" w-25 h-100  mx-auto rounded-circle bg-danger px-4 py-4  mt-4 mb-4 border border-black " />
                                                        : ''}
                                                </div>
                                            </>


                                            : <h3>¡¡¡ Este pokemon es legendario, no puede evolucionar !!!</h3>}
                                    </>
                                    : ""}


                                {typeof evoluciones.chain != 'undefined' ?
                                    <>
                                        {typeof evoluciones.chain.evolves_to[0] != 'undefined' ?
                                            <>
                                                {!pokemonsLegendarios.includes(Pokedex.id) ?
                                                    <>
                                                        <p className="text-white">
                                                            {evoluciones.chain.evolves_to[0].species.name
                                                            }</p>
                                                        <div>
                                                            {typeof evo1.sprites != 'undefined' ?
                                                                <img src={evo2.sprites.other["official-artwork"].front_default} className=" w-25 h-100  mx-auto rounded-circle bg-danger px-4 py-4  mt-4 mb-4 border border-black " />
                                                                : ''}
                                                        </div>
                                                        <p className="text-white">
                                                            Min_Level {evoluciones.chain.evolves_to[0].evolution_details[0].min_level
                                                            }</p>
                                                    </>
                                                    : <p>Este pokemon es legendario, no puede evolucionar</p>}


                                            </>



                                            : ""}

                                    </>

                                    : ""}

                                {typeof evoluciones.chain != 'undefined' ?
                                    <>
                                        {typeof evoluciones.chain.evolves_to[0] != 'undefined' ?
                                            <>
                                                {typeof evoluciones.chain.evolves_to[0].evolves_to[0] != 'undefined' ?
                                                    <>
                                                        {!pokemonsLegendarios.includes(Pokedex.id) ?
                                                            <>
                                                                <p className="text-white">
                                                                    {evoluciones.chain.evolves_to[0].evolves_to[0].species.name
                                                                    }</p>
                                                                <div>
                                                                {typeof evo1.sprites != 'undefined' ?
                                                                <img src={evo3.sprites.other["official-artwork"].front_default} className=" w-25 h-100  mx-auto rounded-circle bg-danger px-4 py-4  mt-4 mb-4 border border-black " />
                                                                : ''}                                                                </div>
                                                                <p className="text-white">
                                                                    Min_Level {evoluciones.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level
                                                                    }</p>

                                                            </>
                                                            : <p>Este pokemon es legendario, no puede evolucionar</p>}

                                                    </>


                                                    : ""}
                                            </>

                                            : ""}

                                    </>

                                    : ""}




                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}