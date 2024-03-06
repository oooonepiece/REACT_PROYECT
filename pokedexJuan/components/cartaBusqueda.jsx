import React from "react"

const CartaBusqueda = ({ pokemon, ubi, setubi }) => {
  fetch("https://pokeapi.co/api/v2/pokemon/" + `${pokemon.id}` + "/encounters")
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
  return (
    <div className="card bg-black bg-opacity-75 text-white mt-5">
      <div className="row g-0">
        <div className="col-md-4">
          <h5 className="card-title text-center "> ID. {pokemon.id}</h5>
          <img className="h-100 w-100 " src={pokemon.sprites.other["official-artwork"].front_default}></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">

            <h2 className="card-title">{pokemon.name}</h2>
            <br></br>
            <h3 className="titulo-seccion">Habilidades:</h3>
            {pokemon.abilities.map(a => a.ability.name)}
            <h3 className="card-title">Estadisticas:</h3>
            {pokemon.stats.map(stat =>
              <section>
                <span >{stat.stat.name} </span>
                <span >  {stat.base_stat}</span>

              </section>
            )}

            <p>Puntos en total: {pokemon.stats.map((a, b) => (a.base_stat + (b - b))).reduce((a, b) => a + b)} Pts.</p>
            <br></br>

            <h3 className="card-title">Tipo:</h3>
            {pokemon.types.map(t => <p>{t.type.name}</p>)}
            <div className="d-flex">

              <button type="button" className="btn bg-white bg-opacity-75 mb-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Zona de Captura
              </button>
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content bg-black bg-opacity-75">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">Zona de Captura</h5>
                      <button type="button" className="btn-close bg-danger  " data-bs-dismiss="modal" aria-label="Close "></button>
                    </div>
                    <div className="modal-body ">

                      <p className="ms-2 fw-bold">{extraerZonas() == 0 ? <p>es una evolucion</p> : extraerZonas()}</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>

                    </div>
                  </div>
                </div>
              </div>


            </div>

            <button type="button" className="btn bg-white bg-opacity-75 " data-bs-toggle="modal" data-bs-target="#static">
              Movimientos
            </button>
            <div className="modal fade" id="static" data-bs-static="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content bg-black bg-opacity-75">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticLabel">Movimientos</h5>
                    <button type="button" className="btn-close bg-danger  " data-bs-dismiss="modal" aria-label="Close "></button>
                  </div>
                  <div className="modal-body ">

                    {pokemon.moves.map(m => <p>{m.move.name}</p>)}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <a href="../index.html"><img src="return.png" width="10%" ></img> </a>
    </div>

  );

};

export default CartaBusqueda;