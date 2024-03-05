

import { useEffect, useState } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group";
const CartaSingle = ({ pokemonSolitario, ubi, setubi, pokemon }) => {

    if (!pokemonSolitario) {
        return
        <>

        </>
    }


    const array = [];

    function extraerMovs() {
        {
            typeof pokemonSolitario.name != "undefined" ?
                <>
                    {
                        pokemonSolitario.moves.map((a) => {
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

    fetch("https://pokeapi.co/api/v2/pokemon/" + `${pokemonSolitario.id}` + "/encounters")
        .then((res) => res.json())
        .then((result) => {
            setubi(result);
        });

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

    extraerZonas();

    const pokemonSinAbility = [11,151,14]

    return (
        <div className="conatainer-fl">
            <div className=" row mx-auto ">
                <div className="card bg-black bg-opacity-25 text-white">
                    {typeof pokemonSolitario.name != "undefined" ?
                        <img src={pokemonSolitario.sprites.other["official-artwork"].front_default} className=" w-25 h-100  mx-auto rounded-circle bg-danger px-4 py-4  mt-4 mb-4 border border-black " />
                        :
                        ' '
                    }
                </div>
            </div>
            <div className="row mx-auto ">
                <div className="card bg-black bg-opacity-25 text-white ">
                    <div className="d-flex">
                        <div className="card w-75 mx-auto rounded-2 bg-black bg-opacity-75 text-white mt-2 mb-3 border border-danger">
                            <h1>Estadísticas</h1>
                            {typeof pokemonSolitario.name != "undefined" ?
                                <div className="d-flex align-items-start flex-column ps-2">
                                    <p>id: #{pokemonSolitario.id}</p>
                                    <p>Nombre: {pokemonSolitario.name}</p>
                                    <p className="d-flex">Habilidades:
                                        {typeof pokemonSolitario.abilities != "undefined" ?
                                            <>
                                                { !pokemonSinAbility.includes(pokemonSolitario.id) ?
                                                    <> {pokemonSolitario.abilities[0].ability.name} , {pokemonSolitario.abilities[1].ability.name}</>
                                                    : <p className="ps-2">No se han encontrado habilidades</p>}
                                                    

                                            </>
                                            : ''}

                                    </p>
                                    <p>Tipo: {pokemonSolitario.types[0].type.name}</p>
                                    <div className="d-flex">
                                        <p className="fw-bold">Altura: {pokemonSolitario.height}</p>
                                        <p className="ms-2 fw-bold">Peso: {pokemonSolitario.weight}</p>
                                    </div>

                                    <div>
                                        <div className="d-flex">
                                            <p className="fw-bold">{pokemonSolitario.stats[0].base_stat} - {pokemonSolitario.stats[0].stat.name}</p>
                                            <p className="ms-2 fw-bold">{pokemonSolitario.stats[1].base_stat} - {pokemonSolitario.stats[1].stat.name}</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="fw-bold">{pokemonSolitario.stats[2].base_stat} - {pokemonSolitario.stats[2].stat.name}</p>
                                            <p className="ms-2 fw-bold">{pokemonSolitario.stats[5].base_stat} - {pokemonSolitario.stats[5].stat.name}</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="fw-bold">{pokemonSolitario.stats[3].stat.name}: {pokemonSolitario.stats[3].base_stat}</p>
                                            <p className="ms-2 fw-bold">{pokemonSolitario.stats[4].stat.name}: {pokemonSolitario.stats[4].base_stat}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <p>P.total de estadísticas:</p>
                                        <p className="ms-2 fw-bold">{pokemonSolitario.stats.map((a, b) => (a.base_stat + (b - b))).reduce((a, b) => a + b)} Pts.</p>

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
                    </div>
                    <a href="../index.html"><img src="../src/assets/img/back.png" width="15%" className="rounded-circle pt-2 pb-3" ></img> </a>
                </div>

            </div>

        </div>


    )
}
export default CartaSingle