import React from "react"
const CartaBusqueda = ({ pokemon}) => {



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
            <h5 className="titulo-seccion">Habilidades:</h5>
            {pokemon.abilities.map(a => a.ability.name)}
            <h5 className="card-title">Estadisticas:</h5>
            {pokemon.stats.map(stat =>
              <section>
                <span >{stat.stat.name} </span>
                <span >  {stat.base_stat}</span>

              </section>
            )}
            <p>Puntos en total: {pokemon.stats.map((a, b) => (a.base_stat + (b - b))).reduce((a, b) => a + b)} Pts.</p>
            <br></br>
            <div>
           
            </div>
            <h5 className="card-title">Tipo:</h5>
            {pokemon.types.map(t => <p>{t.type.name}</p>)}


            <button type="button" class="btn bg-white bg-opacity-75" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Movimientos
            </button>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content bg-black bg-opacity-75">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Movimientos</h5>
                    <button type="button" class="btn-close bg-danger  " data-bs-dismiss="modal" aria-label="Close "></button>
                  </div>
                  <div class="modal-body ">

                    {pokemon.moves.map(m => <p>{m.move.name}</p>)}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="../index.html"><img src="../src/assets/media/return.png" width="10%" ></img> </a>
    </div>

  );

};

export default CartaBusqueda;