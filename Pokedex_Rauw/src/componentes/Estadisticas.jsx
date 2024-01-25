import { useEffect, useState } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group";
export function InfomacionPoke({ Pokedex }) {
const array = [];
    function extraerMovs() {       
            Pokedex.moves.map((a) => {
                array.push(a.move.name);
            });
            return array;
       
    }
    
   if(Pokedex.moves == "undefined"){
        extraerMovs();
   }else{

   }
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
        }, 4000);
        return () => clearInterval(interval);
    }, []);

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
                                <p>Puntuación total de estadísticas:{Pokedex.stats.map((a, b) => (a.base_stat + (b - b))).reduce((a, b) => a + b)} Pts.</p>
                                <div>
                                    <p className="d-flex">Movimientos: 

                                        <SwitchTransition>
                                            <CSSTransition classNames="fade" key={arrayOfWords[movimientosCounter]} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
                                                <div className="card">
                                                    {arrayOfWords[movimientosCounter]}
                                                </div>
                                            </CSSTransition>
                                        </SwitchTransition>



                                    </p>

                                </div>

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